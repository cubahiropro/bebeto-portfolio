// French versions of the content in data/site.ts. Same order / same slugs; only the words change.
export const fr = {
  site: {
    role: 'Designer UI/UX & développeur',
    headline: 'Designer UI/UX & développeur | Flutter, Astro, Angular & Django',
    tagline:
      'Je conçois et développe des applications mobiles et des plateformes web pour les entreprises du Burundi, du premier croquis au lancement.',
    bio: 'Je crée des applications mobiles avec Flutter, des sites et applications web avec Astro et Angular, et les back-ends Django et PostgreSQL qui les font tourner. Je dessine moi-même chaque interface : l’UI/UX et le design graphique font partie de chaque projet.',
  },

  services: [
    { title: 'Applications mobiles', text: 'Des applications Android et iOS avec Flutter, du design de l’interface à la publication. Viva et E-rent sont construites ainsi.' },
    { title: 'Développement web', text: 'Des sites et applications web rapides avec Astro et Angular. The Haven et Tutorpreneur Burundi sont construits ainsi.' },
    { title: 'Back-end et API', text: 'Des back-ends Django, PostgreSQL et Node.js : comptes, données et API sur lesquels vos applications peuvent compter.' },
    { title: 'Design UI/UX', text: 'Des maquettes et des interfaces claires sous Figma, pensées pour être développées et simples à utiliser.' },
    { title: 'Design graphique', text: 'Logos, chartes de marque et visuels avec Photoshop et Illustrator.' },
    { title: 'Pages d’atterrissage', text: 'Une page ciblée qui présente votre offre et facilite la prise de contact.' },
  ],

  experience: [
    { period: 'Oct. 2025 - Aujourd’hui', title: 'Designer UI/UX, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Je conçois des interfaces et des expériences utilisateur pour les plateformes de l’équipe MAGIS.' },
    { period: 'Sept. 2025', title: 'Développeur front-end, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Développeur front-end sur la plateforme de banque en ligne pendant un mois, mon premier poste après avoir rejoint l’équipe.' },
    { period: 'Juin - août 2025', title: 'Stage professionnel, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Stage professionnel en développement logiciel avec l’équipe MAGIS. Il a débouché sur un emploi.' },
    { period: 'Avril - mai 2025', title: 'Stage académique, MAGIS Digital Solutions', place: 'Bujumbura, Burundi', text: 'Stage académique en informatique chez MAGIS-ERP.' },
    { period: '2021 - Aujourd’hui', title: 'AYLF (Africa Leadership Forum)', place: 'Universités', text: 'Organisation de jeunes leaders dans les universités.' },
    { period: '2021 - Aujourd’hui', title: 'YIM (Youth Impact Mission)', place: 'Écoles secondaires de Bujumbura', text: 'Organisation de jeunes leaders dans les écoles secondaires, pour promouvoir un leadership au service d’une société transformée.' },
    { period: '2020 - 2022', title: 'Bénévolat à la Croix-Rouge du Burundi', place: 'Province de Burunga (Bururi, Makamba, Rutana)', text: 'Contribution active à des initiatives humanitaires et de soutien communautaire, qui a renforcé ma capacité à travailler en équipe et à gérer des situations variées.' },
  ],

  education: [
    { title: 'Université du Lac Tanganyika', text: 'Informatique : génie logiciel' },
    { title: 'E.T.S Kiremba-Sud', text: 'Lycée' },
    { title: 'E.G.S Gitega', text: 'Lycée' },
    { title: 'Lycée municipal de Bururi', text: 'Lycée' },
    { title: 'École primaire Nyamugari 1', text: 'École primaire' },
  ],

  glance: {
    now: 'Designer UI/UX chez MAGIS Digital Solutions',
    before: 'Étudiant en génie logiciel, Université du Lac Tanganyika (2021 - 2024)',
    award: '',
  },
  profile: {
    city: 'Bujumbura, Burundi',
    degree: 'Informatique : génie logiciel, Université du Lac Tanganyika',
    availableFor: 'Missions freelance et offres d’emploi en tant que développeur et designer UI/UX',
    website: { label: 'Mon ancien portfolio', href: 'https://bebetos12.github.io/Bebeto-UI/' },
  },
  achievements: [] as { title: string; period?: string; place?: string; text?: string; bullets?: string[] }[],

  interests: ['Créativité', 'Design UI/UX', 'Esprit d’équipe', 'Leadership'],

  stack: [
    { group: 'Mobile', items: ['Flutter'] },
    { group: 'Web', items: ['Astro', 'Angular', 'JavaScript'] },
    { group: 'Back-end', items: ['Django (Python)', 'PostgreSQL', 'Node.js'] },
    { group: 'Design', items: ['UI/UX', 'Design graphique', 'Figma', 'Photoshop', 'Illustrator'] },
    { group: 'Outils', items: ['Git', 'Docker', 'Linux'] },
    { group: 'En apprentissage', items: ['Apprentissage automatique', 'Entraînement de modèles'] },
  ],

  languages: [{ name: 'Kirundi' }, { name: 'Anglais' }, { name: 'Français' }],

  testimonialRoles: ['Développeur frontend', 'Développeur backend', 'Support utilisateurs', 'Développeur full-stack', 'Développeur full-stack', 'Développeur web frontend'],

  projects: {
    'the-haven': {
      category: 'Site web',
      tagline: 'Des appartements et villas meublés à Bujumbura et Kigali, conçus et développés avec Astro.',
      forWho: 'The Haven, une entreprise de location meublée à Bujumbura et Kigali, et les locataires qui cherchent un logement vérifié où séjourner.',
      did: 'J’ai conçu l’interface et développé le site de bout en bout, en français.',
      result: 'Les locataires peuvent parcourir des appartements et villas vérifiés, voir des prix mensuels transparents en dollars US et réserver en ligne, dans les deux villes.',
    },
    viva: {
      category: 'Application mobile + IA',
      tagline: 'Une boîte à outils de vie personnelle qui fonctionne hors ligne et garde vos données sur votre téléphone.',
      forWho: 'Les utilisateurs au quotidien au Burundi qui veulent réunir leurs tâches, leur argent, leur santé et leurs habitudes au même endroit, sans dépendre d’une connexion ni du cloud.',
      did: 'J’ai conçu et développé l’application Android avec Flutter, et entraîné le modèle d’IA embarqué (Viva AI) qui produit ses conseils.',
      result: 'Tâches, dépenses, humeur, notes, santé, objectifs et sommeil sont réunis dans une seule application qui fonctionne entièrement hors ligne, avec des analyses générées sur le téléphone lui-même : aucune donnée personnelle ne quitte l’appareil.',
    },
    'e-rent': {
      category: 'Application mobile',
      tagline: 'Une application de location pour le téléphone, conçue et développée avec Flutter.',
      forWho: 'Les personnes qui louent et les propriétaires qui publient des annonces, depuis leur téléphone.',
      did: 'J’ai conçu les écrans et développé l’application avec Flutter.',
      result: 'Le parcours de location, de la recherche à la prise de contact, tient dans une seule application mobile.',
    },
    'tutorpreneur-burundi': {
      category: 'Plateforme web',
      tagline: 'Une plateforme d’apprentissage et d’entrepreneuriat pour les jeunes du Burundi.',
      forWho: 'Les jeunes apprenants, les formateurs et les entrepreneurs du Burundi.',
      did: 'J’ai conçu l’interface et développé l’application web avec Angular, appuyée par Django et PostgreSQL.',
      result: 'Formations, tuteurs, entrepreneurs, ressources et événements sont réunis sur une seule plateforme, avec une version mobile pour apprendre en déplacement.',
    },
    harvest: {
      category: 'Site web',
      tagline: 'Une vitrine en ligne pour Shana Harvest Market, frais et local, développée avec Astro.',
      forWho: 'Shana Harvest Market, un marché de produits frais et locaux, et les clients qui y font leurs achats.',
      did: 'J’ai développé le site avec Astro autour de l’identité de la marque.',
      result: 'Les clients peuvent trouver le marché et ce qu’il propose en ligne, sur un site rapide et léger.',
    },
    ihela: {
      category: 'Fintech',
      tagline: 'La plateforme de services financiers numériques d’iHela Credit Union, sur le web et le mobile.',
      forWho: 'Les membres et le personnel d’iHela Credit Union au Burundi.',
      did: 'J’ai contribué au sein de l’équipe MAGIS qui la développe : développement front-end sur la plateforme de banque en ligne, puis design UI/UX.',
      built: 'La plateforme MAGIS existante de l’équipe',
      result: 'Les membres gèrent comptes, transferts, retraits, paiements et clubs d’épargne depuis une seule application.',
    },
    magis: {
      category: 'ERP',
      tagline: 'MAGIS ERP, la plateforme qui aide les organisations à gérer et développer leur activité.',
      forWho: 'Les organisations qui travaillent avec MAGIS, comme iHela Credit Union, et les équipes qui s’y connectent chaque jour.',
      did: 'J’ai contribué au sein de l’équipe MAGIS Digital Solutions : stages académique et professionnel en 2025, puis développeur front-end et designer UI/UX depuis septembre 2025.',
      built: 'La pile technique MAGIS existante de l’équipe',
      result: 'Les équipes travaillent depuis une plateforme sécurisée unique pour piloter les opérations de leur organisation.',
    },
  } as Record<string, Record<string, string>>,
};
