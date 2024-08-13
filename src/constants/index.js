import {
  frontend,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  math,
  fuelstation,
  hostelmanagement,
  memories,
  stackoverflow,
  ux,
  nullclass,
  logicsystem,
  social
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Web Developer',
    icon: ux,
  }, {
    title: 'Mobile App Developer',
    icon: frontend
  }

];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Logic Systems, Nashik',
    icon: logicsystem,
    iconBg: '#333333',
    date: 'Jan 2024 - March 2024',
  },
  {
    title: 'Freelancing Developer',
    company_name: 'Social',
    icon: social,
    iconBg: '#333333',
    date: 'June 2023 - Aug 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'NullClass',
    icon: nullclass,
    iconBg: '#333333',
    date: 'Feb 2023 - April 2023',
  },




];

const projects = [
  {
    id: 'project-1',
    name: 'Fuel Station',
    description: 'Real life web application for fuel stations',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: fuelstation,
    repo: 'https://github.com/saurabhraut1212/fuel-station',

  },
  {
    id: 'project-2',
    name: 'Hostel Management App',
    description:
      'The real life web application for hostel owners',
    tags: [
      {
        name: 'next js',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: hostelmanagement,
    repo: 'https://github.com/saurabhraut1212/hostel-management-app',

  },
  {
    id: 'project-3',
    name: 'Social Media App',
    description: 'The real life project for social networking',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/saurabhraut1212/social-media-app',

  },
  {
    id: 'project-4',
    name: 'Memories',
    description: `Keep your memories alive and make sure to add memories everyday`,
    tags: [
      {
        name: 'react js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'pink-text-gradient',
      },
    ],
    image: memories,
    repo: 'https://github.com/saurabhraut1212/memories',

  },
  {
    id: 'project-5',
    name: 'StackOverflow Clone',
    description:
      'This is fullstack clone of StackOverflow website ',
    tags: [
      {
        name: 'react js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: stackoverflow,
    repo: 'https://github.com/saurabhraut1212/stackoverflow-clone',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
