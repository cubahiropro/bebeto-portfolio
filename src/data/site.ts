export const site = {
  name: 'Bebeto',
  fullName: 'Niyera Néré Brunel',
  role: 'UI/UX Designer & Developer',
  headline: 'UI/UX Designer & Developer | Flutter, Astro, Angular & Django',
  tagline:
    'I design and build mobile apps and web platforms for businesses in Burundi, from the first sketch to launch.',
  bio: "I build mobile apps with Flutter, websites and web apps with Astro and Angular, and the Django and PostgreSQL back ends behind them. I design every interface myself, so UI/UX and graphic design are part of each project.",
  whatsapp: '25769726371',
  whatsappDisplay: '+257 69 72 63 71',
  email: 'mezimorel12@gmail.com',
  phone: '+257 76 197 888',
  phones: ['+257 76 197 888', '+257 69 72 63 71'], // both numbers can be called; the second one is also the WhatsApp number
  location: 'Bujumbura — Burundi',
  cv: '/cv.pdf',
  socials: [
    { label: 'Discord', icon: 'discord', href: 'https://discord.com/users/1547126769507897385' },
    { label: 'GitHub', icon: 'github', href: 'https://github.com/cubahiropro' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/bebeto_brnl/' },
    { label: 'Pinterest', icon: 'pinterest', href: 'https://www.pinterest.com/mezibebeto/' },
    { label: 'X', icon: 'x', href: 'https://x.com/MeziMorel?s-=09' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/brunel-bebeto-5150ba358' },
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/niyera.nereslay' },
    { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/25769726371' },
    { label: 'Threads', icon: 'threads', href: 'https://www.threads.net/@bebeto_brnl' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Placeholder copy — edit freely. `icon` is the inner markup of a 24x24 stroke icon.
export const services = [
  { title: 'Mobile Apps', text: 'Android and iOS apps in Flutter, from UI design to release. Viva and E-rent are built this way.', icon: '<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>' },
  { title: 'Web Development', text: 'Fast websites and web apps in Astro and Angular. The Haven and Tutorpreneur Burundi are built this way.', icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
  { title: 'Backend & APIs', text: 'Django, PostgreSQL and Node.js back ends: accounts, data and APIs your apps can rely on.', icon: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>' },
  { title: 'UI/UX Design', text: 'Wireframes and clean interfaces in Figma, designed to be built and easy to use.', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>' },
  { title: 'Graphic Design', text: 'Logos, brand kits and visuals with Photoshop and Illustrator.', icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>' },
  { title: 'Landing Pages', text: 'One focused page that explains your offer and makes it easy to get in touch.', icon: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
];

// Old percentage bars (kept for reference, no longer shown: the numbers were not evidence).
export const skills = [
  { name: 'Flutter', level: 90 },
  { name: 'Astro', level: 90 },
  { name: 'Angular', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Python / Django', level: 30 },
  { name: 'UI/UX & Graphic Designer', level: 95 },
];

// What I build with, grouped by what it is used for. Shown as chips; the projects are the proof.
export const stack = [
  { group: 'Mobile', items: ['Flutter'] },
  { group: 'Web', items: ['Astro', 'Angular', 'JavaScript'] },
  { group: 'Back end', items: ['Django (Python)', 'PostgreSQL', 'Node.js'] },
  { group: 'Design', items: ['UI/UX', 'Graphic design', 'Figma', 'Photoshop', 'Illustrator'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Linux'] },
  { group: 'Learning', items: ['Machine learning', 'Training models'] },
];

// From your CV.
export const languages = [
  { name: 'Kirundi', level: 100 },
  { name: 'English', level: 87 },
  { name: 'French', level: 71 },
];
export const interests = ['Creativity', 'UI/UX Design', 'Team spirit', 'Leadership'];

// Your work and volunteering, newest first. Dates and places come from what you told me (the PDF CV still says "25 April - present").
export const experience = [
  { period: 'Oct 2025 - Present', title: 'UI/UX Designer, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Designing interfaces and user experiences for the MAGIS team’s platforms.' },
  { period: 'Sept 2025', title: 'Front-end developer, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Worked as a front-end developer on the online banking platform for one month, my first role after joining the team.' },
  { period: 'June - Aug 2025', title: 'Professional internship, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Professional software internship with the MAGIS team. It led to a job.' },
  { period: 'April - May 2025', title: 'Academic internship, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Academic internship in computer software at MAGIS-ERP.' },
  { period: '2021 - Present', title: 'AYLF (Africa Leadership Forum)', place: 'Universities', text: 'Organization of young leaders in universities.' },
  { period: '2021 - Present', title: 'YIM (Youth Impact Mission)', place: 'Secondary schools in Bujumbura', text: 'Organization of young leaders working in secondary schools, aiming to promote leadership for a transformed society.' },
  { period: '2020 - 2022', title: 'Volunteering, Burundi Red Cross', place: 'Burunga Province (Bururi, Makamba, Rutana)', text: 'Active contribution to humanitarian and community support initiatives, strengthening my ability to work in a team and manage varied situations.' },
];

export const education = [
  { period: '2021 - 2024', title: 'University of Lac-Tanganyika', text: 'Computer Science: Software Engineering' },
  { period: '2016 - 2020', title: 'E.T.S Kiremba-Sud', text: 'High School' },
  { period: '2015 - 2016', title: 'E.G.S Gitega', text: 'High School' },
  { period: '2011 - 2015', title: 'Bururi Municipal High School', text: 'High School' },
  { period: '2004 - 2011', title: 'Ecole Primaire Nyamugari 1', text: 'Primary School' },
];

// Resume details. Give an item a `place` and `bullets` to show it as a detailed entry (see the timelines on /resume).
export type Entry = { title: string; period?: string; place?: string; text?: string; bullets?: string[] };

// The "At a glance" card. Leave `award` empty to hide that row.
export const glance = {
  now: 'UI/UX designer at MAGIS Digital Solutions',
  before: 'Software engineering student, University of Lac-Tanganyika (2021 - 2024)',
  award: '',
};

export const profile = {
  city: 'Bujumbura, Burundi',
  degree: 'Computer Science: Software Engineering, University of Lac-Tanganyika',
  availableFor: 'Freelance work and job offers as a developer and UI/UX designer',
  website: { label: 'My previous portfolio', href: 'https://bebetos12.github.io/Bebeto-UI/' },
};

// Prizes and achievements. Empty for now, so the section is hidden until you add some.
export const achievements: Entry[] = [];

// Projects, in two groups: "shipped" (products I designed and built) and "contributed" (platforms where I joined a team).
// Every case answers the same four questions:
//   forWho  - who it was for          did    - what I did
//   built   - what I built it with    result - what changed (one outcome is enough)
// `tagline` is the one-line headline shown on cards. Lines marked CONFIRM are written from public evidence
// (the live site, your CV, your repos) but only you know the full story: edit them freely.
// Images are file names (no extension) from public/images/projects/, made by `npm run images`.
export type Project = {
  slug: string;
  group: 'shipped' | 'contributed';
  title: string;
  category: string;
  tagline: string;
  forWho: string;
  did: string;
  built: string;
  result: string;
  live: string;
  status: 'live' | 'built' | 'apk'; // live: online; built: finished, not deployed yet; apk: Android app built, not on a store yet
  images: string[];
};

export const projects: Project[] = [
  // ---------------- Shipped ----------------
  {
    slug: 'the-haven',
    group: 'shipped',
    title: 'The Haven',
    category: 'Website',
    tagline: 'Furnished apartments and villas in Bujumbura and Kigali, designed and built in Astro.',
    forWho: 'The Haven, a furnished-rental business in Bujumbura and Kigali, and the renters looking for a verified place to stay.',
    did: 'Designed the interface and built the website end to end, in French.',
    built: 'Astro',
    result: 'Renters can browse verified apartments and villas, see transparent monthly prices in US dollars and book online, in both cities.',
    live: 'https://thehaven-online.com',
    status: 'live',
    images: ['thehaven-online'],
  },
  {
    slug: 'viva',
    group: 'shipped',
    title: 'Viva',
    category: 'Mobile App + AI',
    tagline: 'A personal life toolkit that works offline and keeps your data on your phone.',
    forWho: 'Everyday users in Burundi who want their tasks, money, health and habits in one place, without relying on a connection or the cloud.',
    did: 'Designed and built the Android app in Flutter, and trained the on-device AI model (Viva AI) behind its insights.',
    built: 'Flutter, Python, TensorFlow Lite, scikit-learn',
    result: 'Tasks, expenses, mood, notes, health, goals and sleep live in one app that works fully offline, with insights generated on the phone itself, so no personal data leaves the device.',
    live: '',
    status: 'apk',
    images: ['viva-app', 'viva-ai-friendly-robot-assistant'],
  },
  {
    // CONFIRM: audience, what you did and the outcome
    slug: 'e-rent',
    group: 'shipped',
    title: 'E-rent',
    category: 'Mobile App',
    tagline: 'A rental app for the phone, designed and built in Flutter.',
    forWho: 'People who rent and the owners who list, on their phones.',
    did: 'Designed the screens and built the app in Flutter.',
    built: 'Flutter',
    result: 'The rental journey, from browsing to getting in touch, fits in one mobile app.',
    live: '',
    status: 'built',
    images: ['e-rent'],
  },
  {
    slug: 'tutorpreneur-burundi',
    group: 'shipped',
    title: 'Tutorpreneur Burundi',
    category: 'Web Platform',
    tagline: 'A learning and entrepreneurship platform for young people in Burundi.',
    forWho: 'Young learners, tutors and entrepreneurs in Burundi.',
    did: 'Designed the interface and built the web app in Angular, backed by Django and PostgreSQL.',
    built: 'Angular, NgRx, Django, PostgreSQL',
    result: 'Training, tutors, entrepreneurs, resources and events sit in one platform, with a mobile version for learners on the go.',
    live: '',
    status: 'built',
    images: ['tutorpreuneur-burundi-learning-platform'],
  },
  {
    // CONFIRM: the outcome
    slug: 'harvest',
    group: 'shipped',
    title: 'Harvest',
    category: 'Website',
    tagline: 'An online home for Shana Harvest Market, fresh and local, built in Astro.',
    forWho: 'Shana Harvest Market, a fresh-and-local produce market, and the customers who shop there.',
    did: 'Built the website in Astro around the market\'s brand.',
    built: 'Astro',
    result: 'Customers can find the market and what it sells online, on a fast, lightweight site.',
    live: 'https://harvest.bi',
    status: 'live',
    images: ['harvest'], // the logo, until there is a screenshot
  },
  // ---------------- Contributed ----------------
  {
    // CONFIRM: your exact part
    slug: 'ihela',
    group: 'contributed',
    title: 'iHela',
    category: 'Fintech',
    tagline: 'The digital financial-services platform of iHela Credit Union, on web and mobile.',
    forWho: 'The members and staff of iHela Credit Union in Burundi.',
    did: 'Contributed as part of the MAGIS team that builds it: front-end development on the online banking platform, then UI/UX design.',
    built: 'The team\'s existing MAGIS platform',
    result: 'Members manage accounts, transfers, withdrawals, payments and savings clubs from a single app.',
    live: 'https://ihela.bi',
    status: 'live',
    images: ['ihela', 'ihela-mobile'],
  },
  {
    // CONFIRM: your exact part
    slug: 'magis',
    group: 'contributed',
    title: 'Magis',
    category: 'ERP',
    tagline: 'MAGIS ERP, the platform that helps organisations run and grow their business.',
    forWho: 'Organisations that run on MAGIS, such as iHela Credit Union, and the staff who sign in to it every day.',
    did: 'Contributed as part of the MAGIS Digital Solutions team: academic and professional internships in 2025, then front-end developer and UI/UX designer since September 2025.',
    built: 'The team\'s existing MAGIS stack',
    result: 'Staff work from one secure platform to manage their organisation\'s operations.',
    live: 'https://magis.bi',
    status: 'live',
    images: ['magis'],
  },
];

export const shipped = projects.filter((p) => p.group === 'shipped');
export const contributed = projects.filter((p) => p.group === 'contributed');

// Not shown on the site for now (thin stories, or not in the two groups). Move one back into `projects` to show it.
export const parkedProjects = [
  { slug: 'bebeto-ui', title: 'Bebeto UI', note: 'My previous portfolio, Angular + SCSS', images: ['bebeto-ui'] },
  { slug: 'clipboard-app', title: 'Clipboard App', note: 'TypeScript clipboard app', images: ['clipboard-checklist-success-icon'] },
];

export const projectImage = (name: string) => `/images/projects/${name}.webp`;

// From the testimonials on your old portfolio. Photos live in public/images/people (made by `npm run assets`).
export const testimonials = [
  { name: 'Babie', role: 'Frontend dev', photo: 'babie', text: 'Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry.' },
  { name: 'Bakame', role: 'Backend Dev', photo: 'bakame', text: 'Exceptional backend architecture and robust solutions. The system performance has improved significantly since we started working together.' },
  { name: 'Darcy', role: 'User Supporter', photo: 'darcy', text: 'The user support and communication have been outstanding. Every issue was resolved quickly and professionally.' },
  { name: 'Samandari', role: 'Full-stack developer', photo: 'samandari', text: 'A true full-stack expert who understands both the visual and functional aspects of development. Highly recommended.' },
  { name: 'Vazquez Rugwe', role: 'Full-stack developer', photo: 'vazquez', text: 'Incredible technical skills and a great eye for design. The project was delivered on time and exceeded all our expectations.' },
  { name: 'βȺɀȺ•ƓටᎠ', role: 'Frontend web dev', photo: 'aza', text: 'One of the best frontend developers I have had the pleasure of working with. The UI is responsive, accessible, and beautiful.' },
];

// Logos that slide under the testimonials (files in public/brand/clients, made by `npm run assets`).
// `h` is the display height in px. Add `href` to make a logo clickable.
export const clients = [
  { name: 'Magis', logo: '/brand/clients/magis.png', h: 46, href: 'https://magis.bi' },
  { name: 'iHela', logo: '/brand/clients/ihela.png', h: 38, href: 'https://ihela.bi' },
  { name: 'The Haven', logo: '/brand/clients/haven.png', h: 58, href: 'https://thehaven-online.com' },
  { name: 'Harvest', logo: '/brand/clients/harvest.png', h: 58 },
  { name: 'Partner', logo: '/brand/clients/partner.png', h: 48 },
];
