import {ordersOverviewData} from '@/dataDummy'
import {ArrowUpIcon} from '@heroicons/react/24/outline'
import {CheckCircleIcon} from '@heroicons/react/24/solid'
import {Card, CardBody, CardHeader, Typography} from '@material-tailwind/react'
import React from 'react'

export function Home() {
  return (
    <div className='mt-12'>
      <div className='mb-10 grid gap-y-10 gap-x-6 md:grid-cols-1 xl:grid-cols-1 '>
        <Card className='shadow-sm border border-blue-gray-100'>
          <CardBody className='w-2/3'>
            <div className='mb-3'>
              <Typography variant='h4'>Hi, i'am Yusuf Firmansyah</Typography>
            </div>
            <Typography variant='paragraph' className='leading-loose tracking-wide'>
              I am an experienced frontend developer with a focus on attractive and interactive user
              interface pages. I'm dedicated to creating web applications that stand out, are
              responsive, and are reliable.
            </Typography>
          </CardBody>
        </Card>
      </div>
      {/* <div className='mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3'>
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant='small'
                className='flex items-center font-normal text-blue-gray-600'
              >
                <ClockIcon strokeWidth={2} className='h-4 w-4 text-blue-gray-400' />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div> */}
      <div className='mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3'>
        <Card className='overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm'>
          <CardHeader
            floated={false}
            shadow={false}
            color='transparent'
            className='m-0 flex items-center justify-between p-6'
          >
            <div>
              <Typography variant='h6' color='blue-gray' className='mb-1'>
                Projects
              </Typography>
              <Typography
                variant='small'
                className='flex items-center gap-1 font-normal text-blue-gray-600'
              >
                <CheckCircleIcon strokeWidth={3} className='h-4 w-4 text-blue-gray-200' />
                Since<strong>2020</strong>
              </Typography>
            </div>
          </CardHeader>
          <CardBody className='overflow-x-auto px-0 pt-0 pb-2'>
            {/* <table className='w-full min-w-[640px] table-auto'>
              <thead>
                <tr>
                  {['name', 'description']?.map((el) => (
                    <th key={el} className='border-b border-blue-gray-50 py-3 px-6 text-left'>
                      <Typography
                        variant='small'
                        className='text-[11px] font-medium uppercase text-blue-gray-400'
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(({img, name, members, description}, key) => {
                  const className = `py-2 px-5 ${
                    key === projectsTableData.length - 1 ? '' : 'border-b border-blue-gray-50'
                  }`

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className='flex items-center'>
                          {/* <Avatar src={img} alt={name} size='sm' /> */}
            {/* <Typography variant='small' color='blue-gray' className='font-bold'>
                            {name}
                          </Typography>
                        </div>
                      </td>  */}

            {/* <td className={className}>
                        {members.map(({img, name}, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size='xs'
                              variant='circular'
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? '' : '-ml-2'
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </td> */}

            {/* <td className={className}>
                        <div className='w-10/12'>
                          <Typography
                            variant='small'
                            className='mb-1 block text-xs font-medium text-blue-gray-600'
                          >
                            {description}
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table> */}
          </CardBody>
          {/* <CardFooter className='text-right'>
            <Button>View More</Button>
          </CardFooter> */}
        </Card>

        <Card className='border border-blue-gray-100 shadow-sm'>
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
