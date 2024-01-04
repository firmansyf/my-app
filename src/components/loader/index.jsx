import {Typography} from '@material-tailwind/react'
import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'

export default function PageLoader() {
  return (
    <section className='w-full flex items-center justify-center' style={{height: '30rem'}}>
      <InfinitySpin visible={true} width='100' color='#4fa94d' ariaLabel='infinity-spin-loading' />
      <Typography variant='h6' className='font-medium'>
        Please wait...
      </Typography>
    </section>
  )
}
