import {
  HomeIcon,
  TableCellsIcon,
  ChartBarIcon,
  LinkIcon,
  CodeBracketIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid'
import {Home, Profile, Tables, Notifications} from '@/pages/dashboard'

const icon = {
  className: 'w-5 h-5 text-inherit',
}

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        path: '/home',
        element: <Home />,
      },

      {
        icon: <ChartBarIcon {...icon} />,
        name: 'analyst',
        path: '/tables',
        element: <Tables />,
      },
      {
        icon: <LinkIcon {...icon} />,
        name: 'blog',
        path: '/blog',
        element: <Notifications />,
      },
      {
        icon: <CodeBracketIcon {...icon} />,
        name: 'project',
        path: '/project',
        element: <Notifications />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: 'about',
        path: '/about',
        element: <Notifications />,
      },
    ],
  },

  // {
  //   title: "auth pages",
  //   layout: "auth",
  //   pages: [
  //     {
  //       icon: <ServerStackIcon {...icon} />,
  //       name: "sign in",
  //       path: "/sign-in",
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <RectangleStackIcon {...icon} />,
  //       name: "sign up",
  //       path: "/sign-up",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
]

export default routes
