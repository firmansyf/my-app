import {Typography} from '@material-tailwind/react'
import React from 'react'
import {FidgetSpinner} from 'react-loader-spinner'

export default function PageLoader() {
  return (
    <section className='w-full flex items-center justify-center' style={{height: '30rem'}}>
      <FidgetSpinner
        visible={true}
        height='50'
        width='50'
        ariaLabel='fidget-spinner-loading'
        wrapperStyle={{}}
        wrapperClass='fidget-spinner-wrapper'
      />
      <Typography variant='h6' className='font-medium'>
        Please wait...
      </Typography>
    </section>
  )
}
