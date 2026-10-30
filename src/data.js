// All page content lives here. Edit this file, then run `npm run build`.
// Every fact below comes from the team's existing profile on gicitc.com.

const IMG_BASE = 'https://gicitc.com/teams/18/images';

export const site = {
  name: 'Dark Horse',
  url: 'https://chinghoir.github.io/dark_house/',
  gicProfile: 'https://gicitc.com/teams/18-dark-horse',
  logo: 'https://gicitc.com/teams/18/logo',
  telegram: { handle: '@bangseokh3ro', url: 'https://t.me/bangseokh3ro' },
  github: { handle: 'GicDarkHorse', url: 'https://github.com/GicDarkHorse' },
  description:
    'Dark Horse is a team of five final-year Information and Communication Engineering students at the Institute of Technology of Cambodia, building web, mobile and real-time systems.',
};

export const hero = {
  title: ['Young minds.', 'Bold builds.'],
  intro:
    'We are Dark Horse: five final-year Information and Communication Engineering students at the Institute of Technology of Cambodia. We build web, mobile and real-time systems, and we have already shipped features into live products during our internships at SAAT R&D Center.',
};

export const stats = [
  { value: 5, label: 'Members' },
  { value: 9, label: 'Projects' },
  { value: 3, label: 'Industry projects' },
  { value: 6, label: 'Academic projects' },
];

export const about = {
  paragraphs: [
    'We have built software in real companies during our internships and in team projects at school, so we know the difference between a project that only works in a demo and a system that people use every day.',
    'Our ICE training covers networks and infrastructure as well as software. That means we don’t stop at writing code: we also understand how a system is hosted, secured and connected.',
    'Each member owns a clear part of the work, and all of us have a full-stack background, so we understand how the whole system fits together. Our goal is simple: start from the real problem, keep everyone involved with weekly demos, and finish only when the system works reliably, is easy to use and is well documented.',
  ],
};

export const members = [
  {
    short: 'David',
    name: 'CHORK RatanakDavid',
    role: 'Team Lead · Full-Stack Developer',
    focus: 'Leads the team, plans the project and builds across the full stack.',
    skills: ['NestJS', 'React', 'Next.js', 'PostgreSQL', 'WebSocket', 'Flutter'],
    photo: `${IMG_BASE}/155`,
  },
  {
    short: 'Kakda',
    name: 'CHHEANG Kakda',
    role: 'Frontend Developer',
    focus: 'Builds the screens and dashboards users see.',
    skills: ['Next.js', 'React', 'Admin dashboards', 'Analytics'],
    photo: `${IMG_BASE}/156`,
  },
  {
    short: 'Vatanak',
    name: 'DAVIN Vatanak',
    role: 'Backend Developer',
    focus: 'Builds the APIs, business logic and payment integration.',
    skills: ['NestJS', 'REST APIs', 'Payment gateways', 'Supabase', 'Flutter'],
    photo: `${IMG_BASE}/157`,
  },
  {
    short: 'Rasy',
    name: 'DIN Rasy',
    role: 'Database & DevOps Engineer',
    focus: 'Designs the database and handles servers and deployment.',
    skills: ['PostgreSQL', 'Database design', 'Docker', 'CI/CD', 'Linux'],
    photo: `${IMG_BASE}/158`,
  },
  {
    short: 'Chanchhinghoir',
    name: 'HUY Chanchhinghoir',
    role: 'UI/UX Designer · QA · Mobile Developer',
    focus: 'Designs the user experience, tests quality and builds mobile.',
    skills: ['Figma', 'Testing', 'Flutter', 'Vue.js', 'Next.js'],
    photo: `${IMG_BASE}/159`,
  },
];

export const capabilities = [
  {
    title: 'UI/UX design',
    body: 'Wireframes, prototypes and screen designs in Figma, approved before development starts.',
    evidence: 'Figma · Wireframing · Prototyping',
  },
  {
    title: 'Web development',
    body: 'Storefronts, admin portals and back offices, with English and Khmer interfaces.',
    evidence: 'React · Next.js · Vue.js · Nuxt.js · TypeScript',
  },
  {
    title: 'Mobile development',
    body: 'Android and iOS apps from one Flutter codebase, sharing the same backend as the web.',
    evidence: 'Flutter · Dart · Supabase',
  },
  {
    title: 'Backend & APIs',
    body: 'REST APIs, business logic, role-based login and Cambodian payment integration (ABA, SaatMoney).',
    evidence: 'NestJS · PostgreSQL · JWT · Swagger',
  },
  {
    title: 'DevOps',
    body: 'Every part of the system packaged with Docker, with automatic build and deploy pipelines.',
    evidence: 'Docker · Jenkins · GitHub',
  },
  {
    title: 'Infrastructure',
    body: 'Linux servers, domains and DNS, HTTPS, firewalls, Nginx reverse proxy and database backups.',
    evidence: 'Linux · Nginx · TCP/IP · Routing & switching',
  },
  {
    title: 'Connected systems',
    body: 'Live dashboards, maps, alerts and chat that update without refreshing the page.',
    evidence: 'WebSocket · Real-time monitoring',
  },
];

export const industry = {
  org: 'SAAT R&D Center',
  note: 'Built during our internships, for live products.',
  projects: [
    {
      name: 'SaatMenu v2',
      summary:
        'QR menu and ordering platform for restaurants with online payment. Guests scan a table QR code to order.',
      tech: ['NestJS', 'Next.js', 'PostgreSQL'],
      contributions: [
        ['Vatanak', 'Customer storefront, menu APIs and ABA / SaatMoney payment integration'],
        ['Kakda', 'Super-admin back office for approving and managing merchants, plus cart, chat, notifications and analytics'],
        ['Chanchhinghoir', 'Merchant back office and the kitchen print agent'],
      ],
    },
    {
      name: 'SmartBin Management System',
      summary: 'Smart waste monitoring with live fill levels, a map, alerts and maintenance requests.',
      tech: ['NestJS', 'React', 'PostgreSQL', 'WebSocket'],
      contributions: [['David', 'Owner web portal and its backend, including real-time updates, alerts and maintenance requests']],
    },
    {
      name: 'SAAT Water & SAAT Wash CMS',
      summary: 'Bilingual content management for two public websites.',
      tech: ['NestJS', 'Next.js', 'PostgreSQL'],
      contributions: [['Rasy', 'Admin back office and admin APIs for website sections, media, menu integrations and activity logs']],
    },
  ],
};

export const academic = [
  {
    name: 'Gift Anusav',
    summary: 'Android and iOS app for discovering and ordering Cambodian handmade gifts, with map, quiz, booking and chat. 93.3% test pass rate.',
    by: 'David, Vatanak, Rasy',
    tech: 'Flutter · Supabase · PostgreSQL',
  },
  {
    name: 'Farm-Link',
    summary: 'Marketplace connecting farmers and buyers, with English/Khmer, cart and QR checkout.',
    by: 'Chanchhinghoir',
    tech: 'Nuxt.js · NestJS',
    link: 'https://github.com/ChingHoir/farmlink',
  },
  {
    name: 'Local Cam E-Commerce',
    summary: 'Online shop for local products with category filtering.',
    by: 'Chanchhinghoir',
    tech: 'Vue.js · TypeScript',
  },
  {
    name: 'NearMe Social',
    summary: 'Location-based social app with nearby feed, real-time chat and admin reports.',
    by: 'David',
    tech: 'NestJS · Vue.js',
  },
  {
    name: 'Jomnus',
    summary: 'Task exchange platform with messaging, proof of completion and ratings.',
    by: 'Rasy',
    tech: 'Next.js · NestJS',
  },
  {
    name: 'Library Management System',
    summary: 'Manages books, members and borrowing.',
    by: 'Whole team',
    tech: 'Web application',
  },
];

export const principles = [
  {
    title: 'Collaboration',
    body: 'Each member owns a clear part of the work. We plan sprints on Trello, review code on GitHub and demo progress every week.',
  },
  {
    title: 'Problem-solving',
    body: 'We start by understanding the problem and the people who have it, before writing any code.',
  },
  {
    title: 'Innovation',
    body: 'We reach for what makes a system genuinely useful: real-time updates, local payments, bilingual interfaces and mobile access.',
  },
  {
    title: 'Continuous learning',
    body: 'From school projects to internships, every build has taught us something we bring into the next one.',
  },
];

export const cta = {
  title: 'Bet on the dark horse.',
  body: 'We are a student team, and we build like it matters. If you have a project you want built properly, from the first sketch to a deployed system, tell us about it.',
};
