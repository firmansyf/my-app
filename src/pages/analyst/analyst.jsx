import {Card, CardHeader, CardBody, Typography} from '@material-tailwind/react'
import {createElement} from 'react'
import {useState, useEffect} from 'react'
import PageLoader from '@/components/loader'
import lost from '@/assets/img/404.svg'

export function Analyst() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className='mt-12 mb-8 flex flex-col gap-12'>
      {loading ? (
        <PageLoader />
      ) : (
        <Card data-aos='fade-up' data-aos-duration='700'>
          <CardHeader variant='gradient' color='white' className='mb-8 p-6'>
            <Typography variant='h6' color='dark'>
              Analyst Table
            </Typography>
          </CardHeader>
          <CardBody className='overflow-x-auto px-0 pt-0 pb-2 min-h-[400px]'>
            <section className='w-full flex justify-center flex-col items-center gap-2'>
              {createElement('img', {
                className: 'w-96',
                src: `${lost}`,
                alt: 'icon-development',
              })}

              <span className='text-gray-600'>Sorry {"we've"} lost this page</span>
            </section>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default Analyst
