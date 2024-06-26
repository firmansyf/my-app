import {useLocation, Link} from 'react-router-dom'
import {Navbar, Typography, IconButton, Breadcrumbs, Avatar} from '@material-tailwind/react'
import {Bars3Icon} from '@heroicons/react/24/solid'
import {useMaterialTailwindController, setOpenSidenav} from '@/context' // setSidenavType

import yusuf from '@/assets/img-office/yusuf.jpg'
// import {SunIcon, MoonIcon} from '@heroicons/react/24/outline'

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController()
  const {fixedNavbar, openSidenav, sidenavType} = controller
  const {pathname} = useLocation()
  const [layout, page] = pathname.split('/').filter((el) => el !== '')

  return (
    <Navbar
      // color={fixedNavbar ? "white" : "transparent"}
      // className={`rounded-xl transition-all ${
      //   fixedNavbar
      //     ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
      //     : "px-0 py-1"
      // }`}
      // blurred={fixedNavbar}
      // color={sidenavType === 'dark' ? '' : 'white'}
      className={`${
        sidenavType === 'dark' ? 'bg-black' : 'bg-white'
      } rounded-xl translate-all sticky top-4 z-40 py-3 shadow-md`}
      fullWidth
      blurred={true}
    >
      <div className='flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center'>
        <div className='capitalize'>
          <Breadcrumbs className={`bg-transparent p-0 transition-all ${fixedNavbar ? 'mt-1' : ''}`}>
            <Link to={`/${layout}`}>
              <Typography
                variant='small'
                color={sidenavType === 'dark' ? 'white' : 'black'}
                className='font-normal opacity-50 transition-all'
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant='small'
              color={sidenavType === 'dark' ? 'white' : 'black'}
              className={'font-normal'}
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant='h6' color={sidenavType === 'dark' ? 'white' : 'blue-gray'}>
            {page}
          </Typography>
        </div>
        <div className='flex items-center sm:justify-between'>
          {/* <div className='mr-auto md:mr-4 md:w-56'>
            <Input label='Search' />
          </div> */}
          <IconButton
            variant='text'
            color='blue-gray'
            className='grid xl:hidden lg:mx-4'
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className='h-6 w-6 text-blue-gray-500' />
          </IconButton>
          {/* <Link to='/auth/sign-in'>
            <Button
              variant='text'
              color='blue-gray'
              className='hidden items-center gap-1 px-4 xl:flex normal-case'
            >
              <UserCircleIcon className='h-5 w-5 text-blue-gray-500' />
              Sign In
            </Button>
            <IconButton variant='text' color='blue-gray' className='grid xl:hidden'>
              <UserCircleIcon className='h-5 w-5 text-blue-gray-500' />
            </IconButton>
          </Link> */}
          {/* <Menu>
            <MenuHandler>
              <IconButton variant='text' color='blue-gray'>
                <BellIcon className='h-5 w-5 text-blue-gray-500' />
              </IconButton>
            </MenuHandler>
            <MenuList className='w-max border-0'>
              <MenuItem className='flex items-center gap-3'>
                <Avatar
                  src='https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg'
                  alt='item-1'
                  size='sm'
                  variant='circular'
                />
                <div>
                  <Typography variant='small' color='blue-gray' className='mb-1 font-normal'>
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center gap-1 text-xs font-normal opacity-60'
                  >
                    <ClockIcon className='h-3.5 w-3.5' /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className='flex items-center gap-4'>
                <Avatar
                  src='https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg'
                  alt='item-1'
                  size='sm'
                  variant='circular'
                />
                <div>
                  <Typography variant='small' color='blue-gray' className='mb-1 font-normal'>
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center gap-1 text-xs font-normal opacity-60'
                  >
                    <ClockIcon className='h-3.5 w-3.5' /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className='flex items-center gap-4'>
                <div className='grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900'>
                  <CreditCardIcon className='h-4 w-4 text-white' />
                </div>
                <div>
                  <Typography variant='small' color='blue-gray' className='mb-1 font-normal'>
                    Payment successfully completed
                  </Typography>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center gap-1 text-xs font-normal opacity-60'
                  >
                    <ClockIcon className='h-3.5 w-3.5' /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu> */}
          <div className='flex gap-2 items-center'>
            {/* <IconButton
              variant='text'
              color='blue-gray'
              className='flex items-center'
              onClick={() => {
                if (sidenavType === 'white') {
                  setSidenavType(dispatch, 'dark')
                } else {
                  setSidenavType(dispatch, 'white')
                }
              }}
            >
              {sidenavType === 'white' ? (
                <SunIcon className='h-5 w-5 text-blue-gray-500' />
              ) : (
                <MoonIcon className='h-5 w-5 text-blue-gray-500' />
              )}
            </IconButton> */}

            <Link to='/dashboard/profile' className=''>
              <Avatar src={yusuf} size='sm' />
            </Link>

            {/* <IconButton
              variant='text'
              color='blue-gray'
              className=''
              onClick={() => setOpenConfigurator(dispatch, true)}
            >
              <Cog6ToothIcon className='h-5 w-5 text-blue-gray-500' />
            </IconButton> */}
          </div>
        </div>
      </div>
    </Navbar>
  )
}

DashboardNavbar.displayName = '/src/widgets/layout/dashboard-navbar.jsx'
export default DashboardNavbar
