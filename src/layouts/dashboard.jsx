import {useMaterialTailwindController} from '@/context'
import {Profile} from '@/pages'
import routes from '@/routes'
import {Configurator, DashboardNavbar, Footer, Sidenav} from '@/widgets/layout'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import {IconButton} from '@material-tailwind/react'
import {Route, Routes} from 'react-router-dom'

export function Dashboard() {
  const [controller] = useMaterialTailwindController() // dispatch
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
          onClick={() => toTelegram('https://t.me/Firmanysf')}
        >
          <PaperAirplaneIcon className='h-5 w-5' />
        </IconButton>
        <Routes>
          {routes.map(
            ({layout, pages}) =>
              layout === 'dashboard' &&
              pages.map(({path, element}, index) => (
                <>
                  <Route key={index} exact path={path} element={element} />
                  <Route path='/profile' element={<Profile />} replace />
                </>
              ))
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
