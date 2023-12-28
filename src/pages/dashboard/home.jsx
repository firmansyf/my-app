import {ordersOverviewData, articlesData} from '@/dataDummy'
import {ArrowUpIcon, ClockIcon} from '@heroicons/react/24/outline'
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from '@material-tailwind/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const handleOnClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='mt-12'>
      <div className='mb-10 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-1 '>
        <Card className='shadow-sm border border-blue-gray-100'>
          <CardBody className='w-2/3'>
            <div className='mb-3'>
              <Typography variant='h4'>Hi, {"i'am Yusuf Firmansyah"}</Typography>
            </div>
            <Typography variant='paragraph' className='tracking-wide font-normal'>
              I am an experienced frontend developer with a focus on attractive and interactive user
              interface pages. {"I'm"} dedicated to creating web applications that stand out, are
              responsive, and are reliable.
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className='mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3'>
        <Card className='overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm'>
          <CardHeader
            floated={false}
            shadow={false}
            color='transparent'
            className='m-0 flex items-center justify-between p-6 pb-0'
          >
            <div>
              <Typography variant='h6' color='blue-gray' className=''>
                Articles
              </Typography>
              <span className=''>These are some of the articles {"I'm worked"}</span>
            </div>
          </CardHeader>
          <CardBody className='overflow-x-auto p-5'>
            {articlesData?.slice(0, 3).map((item, i) => {
              const {tag} = item
              return (
                <article className='my-3' key={i}>
                  <Card
                    className='p-3 border border-blue-gray-50 shadow-sm cursor-pointer relative hover:bg-blue-gray-50 transition-all'
                    onClick={() => handleOnClick(item.path)}
                  >
                    <div className='flex gap-5 items-center'>
                      <img src={item.img} className='w-24 h-24 rounded-lg shadow-md' />

                      <div className='mt-2 w-full'>
                        <Typography variant='h5'>{item.title}</Typography>
                        <p className='text-md tracking-wide w-full'>{item?.description}</p>

                        <section className='flex gap-1 mt-2 items-center'>
                          {tag.map((dt, i) => (
                            <span
                              key={i}
                              className='text-xs p-1 rounded-xl shadow-sm'
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
          <CardFooter className=''>
            <Button
              variant='text'
              className='flex items-center gap-2'
              onClick={() => navigate('/dashboard/blog')}
            >
              Read More{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </CardFooter>
        </Card>

        <Card className='border border-blue-gray-100 shadow-sm' style={{height: '75vh'}}>
          <CardHeader floated={false} shadow={false} color='transparent' className='m-0 p-6'>
            <Typography variant='h6' color='blue-gray' className='mb-2'>
              Experience
            </Typography>
            <Typography
              variant='small'
              className='flex items-center gap-1 font-normal text-blue-gray-600'
            >
              <ArrowUpIcon strokeWidth={3} className='h-3.5 w-3.5 text-green-500' />
              Since <strong>2020</strong>
            </Typography>
          </CardHeader>
          <CardBody className='pt-0 overflow-y-auto max-h-full'>
            {ordersOverviewData?.map(
              ({icon, color, title, description, position, lokasi, jenis_pekerjaaan}, key) => (
                <div key={title} className='flex items-start gap-4 py-3'>
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1 ? 'after:h-0' : 'after:h-4/6'
                    }`}
                  >
                    {React.createElement('img', {
                      className: `!w-7 !h-7 rounded-full ${color}`,
                      src: `${icon}`,
                      alt: 'logo',
                    })}
                  </div>
                  <div>
                    <Typography variant='small' color='blue-gray' className='block font-medium'>
                      {title}
                    </Typography>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='block font-medium opacity-50'
                    >
                      {position}
                    </Typography>
                    <div className='flex mb-0 gap-1'>
                      <span className='text-xs text-gray-500 '>{lokasi},</span>

                      <span className='text-xs text-gray-500'>{jenis_pekerjaaan}</span>
                    </div>
                    <Typography
                      as='span'
                      variant='small'
                      className='text-xs font-medium text-blue-gray-500'
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Home
