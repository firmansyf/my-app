import assetDataImg from '@/assets/img/assetdata_img.png'
import NavaImg from '@/assets/img/nava_img.png'
import smartPatrolImg from '@/assets/img/smartpatrol_img.png'
import stickyNote from '@/assets/img/sticky-note.png'
import motherFood from '@/assets/img/mother-food.png'
import todoApp from '@/assets/img/todo-app.png'

export const projectsData = [
  {
    id: 1,
    img: assetDataImg,
    title: 'AssetData Platform',
    company: 'AssetData.io',
    info: 'AssetData.io is one of the fastest-growing SaaS asset management and maintenance platforms available.',
    tag: ['frontend development'],
    since: 'Sep 2021 - Dec 2023',
    description:
      'AssetData.io is one of the fastest-growing SaaS asset management and maintenance platforms available.',
    repository: '-',
    stack: [{name: 'React Typescript'}, {name: 'Cypress'}, {name: 'Javascript'}],
    tools: [
      {name: 'Slack'},
      {name: 'Bitbucket'},
      {name: 'Sentry'},
      {name: 'Jira'},
      {name: 'Postman'},
    ],
    link: 'https://assetdata.io/',
    demo: false,
    repo: false,
  },
  {
    id: 2,
    img: NavaImg,
    title: 'NAVA',
    company: 'PT. Cudo Communication',
    info: 'Uncover Opportunities, Optimize Efficiency, and Maximize Growth with Network Assets Visualization & Analytics.',
    tag: ['frontend development'],
    since: 'Sep 2023 - Jan 2024',
    description:
      'Uncover Opportunities, Optimize Efficiency, and Maximize Growth with Network Assets Visualization & Analytics.',
    repository: '-',
    stack: [{name: 'React Typescript'}, {name: 'Javascript'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}, {name: 'Figma'}],
    link: 'https://www.cudocomm.com/',
    demo: false,
    repo: false,
  },

  {
    id: 3,
    img: smartPatrolImg,
    title: 'Smart Patrol',
    company: 'PT. Cudo Communication',
    // info: 'Unlimited Access, Guaranteed Security!',
    info: 'This app provides security guards with essential tools for attendance, reporting, and scheduling, along with background location tracking.',
    tag: ['frontend development'],
    since: 'Sep 2023 - Jan 2024',
    description:
      "This app provides security guards with essential tools for attendance, reporting, and scheduling, along with background location tracking. It's built offline-first to ensure constant access, even without an internet connection.",
    repository: '-',
    stack: [{name: 'Javascript'}, {name: 'Jquery'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}],
    link: 'https://www.cudocomm.com/',
    demo: false,
    repo: false,
  },

  // {
  //   img: evolTrackImg,
  //   title: 'Evoltrack',
  //   info: "It's Time to Supervise Easier",
  //   tag: 'frontend development',
  //   description: 'Easy Monitoring for Your Vehicle, Family and Pets!',
  //   route: '/dashboard/profile',
  //   stack: [{name: 'Next Js'}],
  //   tools: [{name: 'Github'}, {name: 'Postman'}],
  // },

  {
    id: 4,
    img: stickyNote,
    title: 'Sticky Notes',
    company: '-',
    info: 'The Sticky Notes project is an application that allows users to take notes, capture ideas, and organize their thoughts easily and quickly.',
    tag: ['frontend development'],
    since: 'Jan 2024',
    description: 'Stick your thoughts, peel your ideas.',
    repository: '-',
    stack: [{name: 'React JS'}, {name: 'Javascript'}],
    tools: [{name: 'Github'}],
    demo: true,
    repo: false,
    note: 'Do not use mobile devices',
  },

  {
    id: 5,
    img: motherFood,
    title: 'Mother Food',
    company: '-',
    // info: 'Unlimited Access, Guaranteed Security!',
    info: 'Mother Food is an application for buying and ordering hygienic and original food',
    tag: ['frontend development', 'landing-page'],
    since: 'Feb 2024',
    description: 'Mother Food: Bringing Hygienic and Original Food to Your Doorstep!',
    repository: 'https://github.com/firmansyf/landing-page-mother-food',
    stack: [{name: 'React Typescript'}, {name: 'Javascript'}],
    tools: [{name: 'Github'}],
    demo: false,
    repo: true,
  },

  {
    id: 6,
    img: todoApp,
    title: 'ToDo App',
    company: '-',
    // info: 'Unlimited Access, Guaranteed Security!',
    info: 'Organize Your Life, One Task at a Time',
    tag: ['frontend development'],
    since: 'Feb 2024',
    description: 'Mother Food: Bringing Hygienic and Original Food to Your Doorstep!',
    repository: 'https://github.com/firmansyf/todo-app',
    stack: [{name: 'React Typescript'}, {name: 'Javascript'}, {name: 'Cypress'}],
    tools: [{name: 'Github'}, {name: 'Unit-testing'}],
    demo: false,
    repo: true,
  },
]

export default projectsData
