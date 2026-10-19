// GitHub contributions for the site, fetched once per build and shared by every page that shows them.
// Source: a free public contributions API. The last good result is cached in src/data/github-contributions.json,
// so a build without internet still has numbers. Rebuild the site to refresh the snapshot.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import net from 'node:net';
net.setDefaultAutoSelectFamilyAttemptTimeout(500); // some networks stall on IPv6; try the next address sooner

export const GITHUB_USER = 'cubahiropro';
export type Day = { date: string; count: number; level: number };

const CACHE = join(process.cwd(), 'src/data/github-contributions.json'); // project root, not the build output folder
let pending: Promise<Day[]> | null = null;

async function load(): Promise<Day[]> {
  let data: { contributions: Day[] } | null = null;
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, { signal: AbortSignal.timeout(10000) });
    if (res.ok) {
      data = await res.json();
      writeFileSync(CACHE, JSON.stringify(data));
    }
  } catch {}
  if (!data && existsSync(CACHE)) data = JSON.parse(readFileSync(CACHE, 'utf8'));
  return data?.contributions ?? [];
}

/** All days of the last year (empty if GitHub and the cache are both unavailable). */
export const getContributionDays = (): Promise<Day[]> => (pending ??= load());
export const sumContributions = (days: Day[]) => days.reduce((n, d) => n + d.count, 0);
