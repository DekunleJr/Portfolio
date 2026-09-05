const projects = [
  {
    id: 'trulaju',
    name: 'Trulaju',
    type: 'Production platform',
    roles: ['Full-Stack Engineer'],
    description:
      'A telematics-based, pay-per-kilometer vehicle insurance platform. Real GPS-derived mileage drives usage-based billing instead of traditional fixed pricing.',
    built: 'Real-time mileage accounting, policy, payment and claims workflows, wallet and notification systems on a substantial FastAPI backend.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'React', 'Next.js'],
    links: [{ label: 'View the case study', href: '#trulaju', kind: 'internal' }],
    featured: true,
  },
  {
    id: 'mioshio',
    name: 'Mioshio',
    type: 'Web application backend',
    roles: ['Backend Development'],
    image: '/mioshio.svg',
    imageAlt: 'Mioshio logo',
    description:
      'Scalable backend for a dynamic web application.',
    built: 'Robust REST APIs and database integration built with Node.js and Express.js, backed by MySQL.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    links: [{ label: 'Live site', href: 'https://mioshio.com/', kind: 'external' }],
  },
  {
    id: 'cit',
    name: 'CIT',
    type: 'Custom web application backend',
    roles: ['Backend Development'],
    image: '/cit.jpg',
    imageAlt: 'CIT logo',
    description:
      'Custom web application backend for an education platform.',
    built: 'Scalable backend services built with Node.js and Express.js, powered by MongoDB.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    links: [{ label: 'Live site', href: 'https://www.citedu.org/', kind: 'external' }],
  },
  {
    id: 'tradereturn',
    name: 'Trade Return',
    type: 'REST API platform',
    roles: ['Backend Development'],
    image: '/tradereturn_favicon.png',
    imageAlt: 'Trade Return logo',
    description:
      'REST API platform with external integrations.',
    built: 'Efficient and scalable REST API with robust error handling and external API integration, backed by MySQL.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'External APIs'],
    links: [{ label: 'Live site', href: 'https://tradereturn.online/', kind: 'external' }],
  },
  {
    id: 'mini-ecommerce',
    name: 'Mini E-Commerce',
    type: 'E-commerce backend',
    roles: ['Backend Development'],
    image: '/Mini.png',
    imageAlt: 'Mini E-Commerce logo',
    description:
      'E-commerce platform backend.',
    built: 'REST API backend with secure user authentication and PostgreSQL data storage.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Authentication'],
    links: [
      { label: 'GitHub', href: 'https://github.com/DekunleJr/Mini-Ecommerce', kind: 'external' },
    ],
  },
];

export default projects;
