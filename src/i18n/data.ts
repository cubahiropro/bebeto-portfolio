// Content in the right language: the English data in data/site.ts, with French overrides from i18n/fr.ts.
import { site, services, experience, education, interests, stack, languages, projects, testimonials, clients, nav, glance, profile, achievements } from '../data/site';
import type { Project } from '../data/site';
import { fr } from './fr';
import { t, link, type Lang } from './index';

export const getSite = (lang: Lang) => (lang === 'fr' ? { ...site, ...fr.site } : site);

export const getNav = (lang: Lang) =>
  nav.map((n, i) => ({
    href: link(lang, n.href),
    bare: n.href,
    label: t(lang, (['nav.home', 'nav.resume', 'nav.services', 'nav.portfolio', 'nav.blog', 'nav.contact'] as const)[i]),
  }));

export const getServices = (lang: Lang) => services.map((s, i) => (lang === 'fr' ? { ...s, ...fr.services[i] } : s));
export const getExperience = (lang: Lang) => experience.map((e, i) => (lang === 'fr' ? { ...e, ...fr.experience[i] } : e));
export const getEducation = (lang: Lang) => education.map((e, i) => (lang === 'fr' ? { ...e, ...fr.education[i] } : e));
export const getInterests = (lang: Lang) => (lang === 'fr' ? fr.interests : interests);
export const getStack = (lang: Lang) => (lang === 'fr' ? fr.stack : stack);
export const getLanguages = (lang: Lang) => languages.map((l, i) => (lang === 'fr' ? { ...l, ...fr.languages[i] } : l));

export const getProjects = (lang: Lang): Project[] =>
  projects.map((p) => (lang === 'fr' && fr.projects[p.slug] ? ({ ...p, ...fr.projects[p.slug] } as Project) : p));
export const getShipped = (lang: Lang) => getProjects(lang).filter((p) => p.group === 'shipped');
export const getContributed = (lang: Lang) => getProjects(lang).filter((p) => p.group === 'contributed');

// Testimonial quotes stay exactly as they were written; only the role label is translated.
export const getTestimonials = (lang: Lang) => testimonials.map((x, i) => (lang === 'fr' ? { ...x, role: fr.testimonialRoles[i] } : x));
export { clients };

export const getGlance = (lang: Lang) => (lang === 'fr' ? { ...glance, ...fr.glance } : glance);
export const getProfile = (lang: Lang) => (lang === 'fr' ? { ...profile, ...fr.profile } : profile);
export const getAchievements = (lang: Lang) => (lang === 'fr' ? fr.achievements : achievements);
