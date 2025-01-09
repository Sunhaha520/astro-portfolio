import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const EDUCATION = [
  {
    school: "澳门大学",
    degree: "硕士",
    major: "土木工程",
    period: "2024 - 2026",
    logo: "/um.webp",
    link: "https://www.um.edu.mo/"
  },
  {
    school: "南京林业大学",
    degree: "学士",
    major: "土木工程",
    period: "2019 - 2023",
    logo: "/njfu.webp",
    link: "https://www.njfu.edu.cn/"
  }
];

export const LINKS = {
  github: 'https://github.com/bue221',
  linkedin: 'https://www.linkedin.com/in/bue221/',
  mail: 'mailto:camiloplaza3@gmail.com',
  instagram: 'https://www.instagram.com/caj_ink/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Straico',
    location: 'Bogotá D C, Colombia',
    position: 'Software Engineer',
    start: '2021',
    link: 'https://straico.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'Spot2',
    location: 'Mexico City, Mexico',
    position: 'Software Engineer',
    link: 'https://spot2.mx/',
    start: '2021',
    end: 'Current',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  }

]
