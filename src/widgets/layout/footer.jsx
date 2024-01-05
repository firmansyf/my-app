import PropTypes from 'prop-types'
import {Typography} from '@material-tailwind/react'

export function Footer({routes}) {
  const year = new Date().getFullYear()

  return (
    <footer className='py-5 mt-7'>
      <div className='flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between'>
        <Typography variant='small' className='font-normal text-inherit'>
          &copy; {year} yusuf Firmansyah
        </Typography>
        <ul className='flex items-center gap-4'>
          {routes.map(({name, path}) => (
            <li key={name}>
              <Typography
                as='a'
                href={path}
                target='_blank'
                variant='small'
                className='py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500'
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  brandName: 'Creative Tim',
  brandLink: 'https://www.creative-tim.com',
  routes: [
    {name: 'Github', path: 'https://github.com/firmansyf'},
    {name: 'Facebook', path: 'https://www.facebook.com'},
    {name: 'Linkedin', path: 'https://www.linkedin.com/in/yusuf-firmansyah/'},
  ],
}

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
}

Footer.displayName = '/src/widgets/layout/footer.jsx'

export default Footer
