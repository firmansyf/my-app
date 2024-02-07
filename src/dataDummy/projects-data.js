import assetDataImg from '@/assets/img/assetdata_img.png'
import NavaImg from '@/assets/img/nava_img.png'
import smartPatrolImg from '@/assets/img/smartpatrol_img.png'
import evolTrackImg from '@/assets/img/evoltrack_img.png'
import stickyNote from '@/assets/img/sticky-note.png'

export const projectsData = [
  {
    img: assetDataImg,
    title: 'AssetData platform - AssetData.io',
    info: 'Maintenance and Management Asset',
    tag: 'frontend development',
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
  },
  {
    img: NavaImg,
    title: 'NAVA - Pt. Cudo Communication',
    info: 'NETWORK ASSETS VISUALIZATION & ANALYTICS',
    tag: 'frontend development',
    description:
      'Uncover Opportunities, Optimize Efficiency, and Maximize Growth with Network Assets Visualization & Analytics.',
    route: '/dashboard/profile',
    stack: [{name: 'React Typescript'}, {name: 'Javascript'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}],
  },

  {
    img: smartPatrolImg,
    title: 'Smart Patrol - Pt. Cudo Communication',
    info: 'Unlimited Access, Guaranteed Security!',
    tag: 'frontend development',
    description:
      "This app provides security guards with essential tools for attendance, reporting, and scheduling, along with background location tracking. It's built offline-first to ensure constant access, even without an internet connection.",
    route: '/dashboard/profile',
    stack: [{name: 'Javascript'}, {name: 'Jquery'}],
    tools: [{name: 'Gitlab'}, {name: 'Trello'}, {name: 'Postman'}],
  },

  {
    img: evolTrackImg,
    title: 'Evoltrack',
    info: "It's Time to Supervise Easier",
    tag: 'frontend development',
    description: 'Easy Monitoring for Your Vehicle, Family and Pets!',
    route: '/dashboard/profile',
    stack: [{name: 'Next Js'}],
    tools: [{name: 'Github'}, {name: 'Postman'}],
  },

  {
    img: stickyNote,
    title: 'Sticky Notes',
    info: 'Capture. Organize. Inspire.',
    tag: 'frontend development',
    description: 'Stick your thoughts, peel your ideas.',
    route: '/project/sticky-notes',
    stack: [{name: 'React JS'}],
    tools: [{name: 'Github'}],
  },
]

export default projectsData
