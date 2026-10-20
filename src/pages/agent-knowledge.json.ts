// Plain-text facts the AI assistant answers from. Built from the same data as the pages, so it never goes stale.
import { getSite, getServices, getExperience, getEducation, getStack, getProjects, getProfile } from '../i18n/data';
import { site } from '../data/site';
import notesEn from '../data/agent-notes.en.md?raw';
import notesFr from '../data/agent-notes.fr.md?raw';

// Hand-written extra facts (src/data/agent-notes.*.md): comment lines and unfinished "(Add ...)" lines are dropped.
const notes = (raw: string) =>
  raw.split('\n').filter((l) => l.trim() && !l.startsWith('#') && !/\((Add|Ajoutez) /.test(l)).join('\n');

export function GET() {
  const out: Record<string, string> = {};
  for (const lang of ['en', 'fr'] as const) {
    const S = getSite(lang);
    const P = getProfile(lang);
    const lines = [
      `Name: ${site.fullName} (brand: ${site.name}). ${S.role}. Based in ${site.location}.`,
      `About: ${S.bio}`,
      `Available for: ${P.availableFor}.`,
      `Email: ${site.email}. WhatsApp: ${site.whatsappDisplay}. Phones: ${site.phones.join(', ')}.`,
      `Study: ${P.degree}.`,
      '',
      'SERVICES',
      ...getServices(lang).map((s) => `- ${s.title}: ${s.text}`),
      '',
      'EXPERIENCE',
      ...getExperience(lang).map((e) => `- ${e.period}, ${e.title} (${e.place}): ${e.text}`),
      '',
      'EDUCATION',
      ...getEducation(lang).map((e) => `- ${e.title}: ${e.text}`),
      '',
      'SKILLS',
      ...getStack(lang).map((g) => `- ${g.group}: ${g.items.join(', ')}`),
      '',
      'PROJECTS',
      ...getProjects(lang).map(
        (p) => `- ${p.title} [${p.group === 'shipped' ? 'built by Bebeto' : 'contributed to'}, ${p.category}, status: ${p.status === 'live' ? 'live online' : p.status === 'built' ? 'finished but not deployed yet' : 'Android app built but not published on a store yet'}]: ${p.tagline} For: ${p.forWho} What Bebeto did: ${p.did} Result: ${p.result}`,
      ),
      '',
      'MORE FACTS',
      notes(lang === 'fr' ? notesFr : notesEn),
    ];
    out[lang] = lines.join('\n');
  }
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
}
