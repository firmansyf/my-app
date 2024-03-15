import PageLoader from '@/components/loader'
import {articlesData} from '@/dataDummy'
import {ClockIcon} from '@heroicons/react/24/solid'
import {Card, CardBody, Typography} from '@material-tailwind/react'
import {useEffect, useState} from 'react'

export function Blog() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const handleOnClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='my-10 w-full flex flex-col'>
      {loading ? (
        <PageLoader />
      ) : (
        <Card className='w-full' data-aos='fade-up' data-aos-duration='700'>
          <CardBody>
            <Typography>Latest post</Typography>
            {articlesData?.map((item, i) => {
              const {tag} = item
              return (
                <article className='my-3' key={i}>
                  <Card
                    className='p-3 sm:w-full w-4/5 border border-blue-gray-50 shadow-sm cursor-pointer relative hover:bg-blue-gray-50 transition-all'
                    onClick={() => handleOnClick(item.path)}
                  >
                    <div className='flex gap-5 items-center sm:flex-col lg:flex-row'>
                      <img
                        src={item.img}
                        className='lg:w-24 lg:h-24 sm:w-full sm:h-60 md:h-96 rounded-lg shadow-md'
                      />

                      <div className='mt-2 w-full'>
                        <Typography
                          variant='h5'
                          className='lg:font-bold lg:text-xl sm:text-md sm:font-bold'
                        >
                          {item.title}
                        </Typography>
                        <p className='lg:text-md sm:text-sm tracking-wide w-full'>
                          {item?.description}
                        </p>

                        <section className='flex gap-1 mt-2 items-center sm:flex-wrap'>
                          {tag.map((dt, i) => (
                            <span
                              key={i}
                              className='lg:text-sm sm:text-[10px] p-1 rounded-xl w-auto shadow-sm sm:text-center'
                              style={{backgroundColor: '#EEE'}}
                            >
                              {dt}
                            </span>
                          ))}
                          <span className='text-xs p-1 rounded-xl flex items-center'>
                            <ClockIcon className='w-4 mx-1' />
                            {item.duration}
                          </span>
                          <span className='text-xs'>{item.date}</span>
                        </section>
                      </div>
                    </div>
                  </Card>
                </article>
              )
            })}
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default Blog
