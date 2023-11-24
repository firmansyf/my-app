import {Routes, Route} from 'react-router-dom'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import {IconButton, Button} from '@material-tailwind/react'
import {Sidenav, DashboardNavbar, Configurator, Footer} from '@/widgets/layout'
import routes from '@/routes'
import {useMaterialTailwindController, setOpenConfigurator} from '@/context'

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController()
  const {sidenavType} = controller

  const toTelegram = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='min-h-screen bg-blue-gray-50/50'>
      <Sidenav
        routes={routes}
        brandImg={sidenavType === 'dark' ? '/img/logo-ct.png' : '/img/logo-ct-dark.png'}
      />
      <div className='p-4 xl:ml-80'>
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size='lg'
          color='light-blue'
          className='fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10'
          ripple={false}
          onClick={() => toTelegram('tg://resolve?domain=@Firmanysf')}
        >
          <PaperAirplaneIcon className='h-5 w-5' />
        </IconButton>
        <Routes>
          {routes.map(
            ({layout, pages}) =>
              layout === 'dashboard' &&
              pages.map(({path, element}) => <Route exact path={path} element={element} />)
          )}
        </Routes>
        <div className='text-blue-gray-600'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

Dashboard.displayName = '/src/layout/dashboard.jsx'

export default Dashboard
