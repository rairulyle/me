export type Role = { title: string; period: string };

export type Experience = {
  company: string;
  url?: string;
  location: string;
  type: 'Full-time' | 'Freelance' | 'Part-time';
  roles: Role[];
  blurb: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'Sesimi',
    url: 'https://sesimi.com',
    location: 'Australia · Remote',
    type: 'Full-time',
    roles: [
      { title: 'Lead Platform Engineer', period: 'Aug 2025 — Present' },
      { title: 'Senior Full-Stack Engineer', period: 'Mar 2024 — Aug 2025' },
    ],
    blurb:
      'Leading platform work across AWS and serverless, React, and Node — plus AI architecture: custom agents, bots, and the infra behind them.',
  },
  {
    company: 'Sermon Shots',
    url: 'https://sermonshots.com',
    location: 'United States · Remote',
    type: 'Freelance',
    roles: [{ title: 'Senior Full-Stack Developer', period: 'Mar 2025 — Present' }],
    blurb: 'Full-stack TypeScript and SvelteKit work on an AI-powered sermon video platform.',
  },
  {
    company: 'Zouq',
    url: 'https://zouq.online',
    location: 'Remote',
    type: 'Freelance',
    roles: [{ title: 'Lead Full-Stack Developer', period: 'Nov 2023 — Mar 2025' }],
    blurb:
      'Delivered a six-month React build in one month, then led Zouq Food and Zouq Express (Next.js) — coding standards, Vercel migration, and real-time APIs moved from polling to sockets.',
  },
  {
    company: 'theQuestHub.io',
    url: 'https://thequesthub.io',
    location: 'Panama · Remote',
    type: 'Freelance',
    roles: [{ title: 'Senior Web3 Front-end Developer · Tech Lead', period: 'Jul 2022 — Jul 2023' }],
    blurb:
      'Led front-end across Solana, Ethereum, Polygon, and Bitcoin Lightning products — BitLink, Pristine Financial, and Quest Citizens.',
  },
  {
    company: 'Manulife',
    url: 'https://online.manulife.com.ph',
    location: 'Philippines · Hybrid',
    type: 'Full-time',
    roles: [
      { title: 'Senior Front-end Software Engineer · Tech Lead', period: 'Mar 2022 — Jul 2022' },
      { title: 'Front-end Software Engineer · Tech Lead', period: 'Feb 2020 — Mar 2022' },
    ],
    blurb:
      'Initiated the multi-country CWS architecture and the Connected Design System now used across Manulife web and mobile apps. Left with 60+ Podium awards.',
  },
  {
    company: 'OOCL',
    location: 'Philippines',
    type: 'Full-time',
    roles: [
      { title: 'Software Engineer', period: 'Aug 2019 — Feb 2020' },
      { title: 'Programmer', period: 'Jul 2017 — Aug 2019' },
    ],
    blurb: 'Spot awards for the EZ-Search and EZ-DBCompare internal tools; mentored interns and led front-end at the IT Academy Bootcamp.',
  },
  {
    company: 'Mapúa Malayan Colleges Laguna',
    location: 'Philippines',
    type: 'Part-time',
    roles: [{ title: 'Information Technology Instructor', period: 'Jul 2017 — Oct 2019' }],
    blurb: 'Taught C++, algorithms, game design and development, and web development at the College of Computer and Information Science.',
  },
];
