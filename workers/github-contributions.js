// OPTIONAL: real-time GitHub contributions endpoint (Cloudflare Worker, free plan is enough).
//
// Why: the public API the site uses by default caches GitHub's graph for up to an hour.
// This worker asks GitHub directly, so the calendar is as fresh as GitHub itself.
//
// Setup (about 5 minutes):
//   1. Create a GitHub token: Settings > Developer settings > Personal access tokens (classic)
//      with ONLY the `read:user` scope. (Add `repo` too if you want private contributions counted.)
//   2. In Cloudflare: Workers & Pages > Create > Worker, paste this file, then
//      Settings > Variables > add a secret named GITHUB_TOKEN with that token.
//   3. Copy the worker URL into a file named .env in the project root:
//        PUBLIC_GITHUB_CONTRIB_URL=https://YOUR-WORKER.workers.dev
//   4. Rebuild the site (npm run build). Never put the token in the website code itself.
const USER = 'cubahiropro';
const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

export default {
  async fetch(request, env) {
    const cors = { 'access-control-allow-origin': '*', 'cache-control': 'public, max-age=60' };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    const query = `query($login:String!){ user(login:$login){ contributionsCollection{ contributionCalendar{
      totalContributions weeks{ contributionDays{ date contributionCount contributionLevel } } } } } }`;
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { authorization: `bearer ${env.GITHUB_TOKEN}`, 'content-type': 'application/json', 'user-agent': 'portfolio-contributions' },
      body: JSON.stringify({ query, variables: { login: USER } }),
    });
    if (!res.ok) return new Response(JSON.stringify({ error: 'github ' + res.status }), { status: 502, headers: cors });
    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return new Response(JSON.stringify({ error: 'no data' }), { status: 502, headers: cors });

    const contributions = cal.weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 }))
    );
    return new Response(JSON.stringify({ total: { lastYear: cal.totalContributions }, contributions }), {
      headers: { ...cors, 'content-type': 'application/json' },
    });
  },
};
