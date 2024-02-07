import assetDataImg from '@/assets/img/assetdata_img.png'
import NavaImg from '@/assets/img/nava_img.png'
import smartPatrolImg from '@/assets/img/smartpatrol_img.png'
import stickyNote from '@/assets/img/sticky-note.png'

export const projectsData = [
  {
    img: assetDataImg,
    title: 'AssetData platform',
    company: 'AssetData.io',
    info: 'AssetData.io is one of the fastest-growing SaaS asset management and maintenance platforms available.',
    tag: 'frontend development',
    since: 'Sep 2021 - Dec 2023',
    description:
      'AssetData.io is one of the fastest-growing SaaS asset management and maintenance platforms available.',
    route: '/dashboard/profile',
    stack: [{name: 'React Typescript'}, {name: 'Cypress'}, {name: 'Javascript'}],
    tools: [
      {name: 'Slack'},
      {name: 'Bitbucket'},
      {name: 'Sentry'},
      {name: 'Jira'},
      {name: 'Postman'},
    ],
    demo: false,
  },
  {
    img: NavaImg,
    title: 'NAVA',
    company: 'PT. Cudo Communication',
    // info: 'NETWORK ASSETS VISUALIZATION & ANALYTICS',
    info: 'Uncover Opportunities, Optimize Efficiency, and Maximize Growth with Network Assets Visualization & Analytics.',
    tag: 'frontend development',
    since: 'Sep 2023 - Jan 2024',
    description:
      'Uncover Opportunities, Optimize Efficiency, and Maximize Growth with Network Assets Visualization & Analytics.',
    route: '/dashboard/profile',
    stack: [{name: 'React Typescript'}, {name: 'Javascript'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}, {name: 'Figma'}],
    demo: false,
  },

  {
    img: smartPatrolImg,
    title: 'Smart Patrol',
    company: 'PT. Cudo Communication',
    // info: 'Unlimited Access, Guaranteed Security!',
    info: 'This app provides security guards with essential tools for attendance, reporting, and scheduling, along with background location tracking.',
    tag: 'frontend development',
    since: 'Sep 2023 - Jan 2024',
    description:
      "This app provides security guards with essential tools for attendance, reporting, and scheduling, along with background location tracking. It's built offline-first to ensure constant access, even without an internet connection.",
    route: '/dashboard/profile',
    stack: [{name: 'Javascript'}, {name: 'Jquery'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}],
    demo: false,
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
    img: stickyNote,
    title: 'Sticky Notes',
    company: '-',
    info: 'The Sticky Notes project is an application that allows users to take notes, capture ideas, and organize their thoughts easily and quickly.',
    tag: 'frontend development',
    since: 'Jan 2024',
    description: 'Stick your thoughts, peel your ideas.',
    route: '/project/sticky-notes',
    stack: [{name: 'React JS'}, {name: 'Javascript'}],
    tools: [{name: 'Github'}],
    demo: true,
  },
]

export default projectsData
