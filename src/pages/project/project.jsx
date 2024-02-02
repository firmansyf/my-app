import React, {useState, useEffect} from 'react'
import {Typography, Card, CardHeader, CardBody} from '@material-tailwind/react'
import {projectsData} from '@/dataDummy'
import PageLoader from '@/components/loader'
import {Link} from 'react-router-dom'

export function Project() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div className='mt-12 flex flex-col gap-8'>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {projectsData.map((data, i) => {
            const {stack, tools} = data
            return (
              <Card
                key={i}
                className='w-full max-w-[48rem] flex-row overflow-auto sm:p-3'
                data-aos='fade-up'
                data-aos-duration='700'
              >
                <CardHeader
                  shadow={false}
                  floated={false}
                  className='m-0 w-2/5 shrink-0 rounded-r-none'
                >
                  <img src={data?.img} alt='card-image' className='h-full w-full object-cover' />
                </CardHeader>
                <CardBody>
                  <Typography variant='h6' color='gray' className='mb-4 uppercase'>
                    {data?.title}
                  </Typography>
                  <Typography variant='h4' color='blue-gray' className='mb-2'>
                    {data?.info}
                  </Typography>
                  <Typography color='gray' className='mb-5 font-normal'>
                    {data?.description}
                  </Typography>
                  <div className='flex flex-wrap items-center h-16'>
                    {stack?.map(({name}, i) => (
                      <span
                        key={i}
                        className='mx-1 p-1 text-xs border-2 border-blue-gray rounded-lg'
                      >
                        {name}
                      </span>
                    ))}

                    {tools?.map(({name}, i) => (
                      <span
                        key={i}
                        className='mx-1 p-1 text-xs border-2 border-blue-gray rounded-lg'
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            )
          })}
          <div>
            <Link to='/project/sticky-notes'>Sticky-notes</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Project
