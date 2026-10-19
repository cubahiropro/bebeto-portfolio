import { ui } from './ui';

export type Lang = 'en' | 'fr';
export const LANGS: Lang[] = ['en', 'fr'];

/** Language of the page being rendered, from its URL (French lives under /fr). */
export const langOf = (url: URL): Lang => (/^\/fr(\/|$)/.test(url.pathname) ? 'fr' : 'en');

/** Interface string in the given language (falls back to English). */
export const t = (lang: Lang, key: keyof typeof ui.en): string => (ui[lang] as Record<string, string>)[key] ?? ui.en[key];

/** Internal link in the given language: link('fr', '/portfolio') -> '/fr/portfolio' */
export const link = (lang: Lang, path: string): string => (lang === 'fr' ? (path === '/' ? '/fr/' : `/fr${path}`) : path);

/** The same page in the other language. */
export const otherLangPath = (lang: Lang, pathname: string): string => {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  if (lang === 'en') return clean === '/' ? '/fr/' : `/fr${clean}`;
  const rest = clean.replace(/^\/fr/, '');
  return rest === '' ? '/' : rest;
};

/** Page path without the language prefix, e.g. '/fr/portfolio/viva' -> '/portfolio/viva' */
export const barePath = (pathname: string): string => {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const rest = clean.replace(/^\/fr/, '');
  return rest === '' ? '/' : rest;
};

export const dateLocale = (lang: Lang) => (lang === 'fr' ? 'fr-FR' : 'en-GB');
