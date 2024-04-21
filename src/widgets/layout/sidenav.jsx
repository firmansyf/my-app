import Ping from '@/components/ping'
import {setOpenSidenav, useMaterialTailwindController} from '@/context'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {Button, IconButton, Typography} from '@material-tailwind/react'
import yusuf from '@/assets/img-office/yusuf.jpg'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export function Sidenav({isName, routes}) {
  const [controller, dispatch] = useMaterialTailwindController()
  const {sidenavType, openSidenav} = controller
  const sidenavTypes = {
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900',
    white: 'bg-white shadow-sm',
    transparent: 'bg-transparent',
  }

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? 'translate-x-0' : '-translate-x-80'
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <section className='py-6 px-8 text-center flex justify-start items-center gap-5'>
          <img src={yusuf} className='w-16 rounded-full shadow-lg border-2' />
          <section className='flex flex-col'>
            <Typography variant='h6' color={sidenavType === 'dark' ? 'white' : 'blue-gray'}>
              {isName}
            </Typography>
            <div className='border border-green-400 rounded-full p-0.5'>
              <Ping Bgcolor={'bg-green-500'}>
                <p className='text-xs text-green-500 font-bold p-1 rounded-full'>
                  Available for hire
                </p>
              </Ping>
            </div>
          </section>
        </section>

        <IconButton
          variant='text'
          color='white'
          size='sm'
          ripple={false}
          className='absolute right-1 top-2 grid rounded-br-none rounded-tl-none xl:hidden'
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className='h-5 w-5 text-black' />
        </IconButton>
      </div>
      <div className='m-4'>
        {routes.map(({layout, title, pages}, key) => (
          <ul key={key} className='mb-4 flex flex-col gap-1'>
            {title && (
              <li className='mx-3.5 mt-4 mb-2'>
                <Typography
                  variant='small'
                  color={sidenavType === 'dark' ? 'white' : 'blue-gray'}
                  className='font-black uppercase opacity-75'
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({icon, name, path}) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({isActive}) => (
                    <Button
                      onClick={() => setOpenSidenav(dispatch, false)}
                      variant={isActive ? 'gradient' : 'text'}
                      color={
                        // isActive ? sidenavColor : sidenavType === 'dark' ? 'white' : 'blue-gray'
                        isActive ? 'green' : 'blue-gray'
                      }
                      className='flex items-center gap-4 px-4 capitalize'
                      fullWidth
                    >
                      {icon}
                      <Typography color='inherit' className='font-medium capitalize'>
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  )
}

Sidenav.defaultProps = {
  brandImg: '/img/logo-ct.png',
  isName: 'Yusuf F.',
}

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  isName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Sidenav.displayName = '/src/widgets/layout/sidenav.jsx'

export default Sidenav
