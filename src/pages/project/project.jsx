import React, {useState, useEffect} from 'react'
import {Typography, Card, CardHeader, CardBody, CardFooter, Tooltip} from '@material-tailwind/react'

import PageLoader from '@/components/loader'
import {projectsData} from '@/dataDummy'
import {InformationCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline'
import {ColorTemplate} from '@/helper'
import {useNavigate} from 'react-router-dom'
import DetailProject from '@/components/detail-project/DetailProject'

export function Project() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isID, setIsID] = useState()

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
          {/* {projectsData.map((data, i) => {
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
                  <div className='flex flex-wrap items-center lg:h-16 sm:h-auto'>
                    {stack?.map(({name}, i) => (
                      <span
                        key={i}
                        className='lg:mx-1 p-1 text-xs border-2 border-blue-gray rounded-lg sm:m-1'
                      >
                        {name}
                      </span>
                    ))}

                    {tools?.map(({name}, i) => (
                      <span
                        key={i}
                        className='lg:mx-1 p-1 text-xs border-2 border-blue-gray rounded-lg sm:m-1'
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            )
          })} */}
          <Card>
            <CardHeader className='p-5'>
              <Typography>Projects</Typography>
            </CardHeader>
            <CardBody className='flex flex-wrap items-center justify-center gap-5 w-full'>
              {projectsData?.map((item, i) => {
                const {stack} = item
                return (
                  <Card
                    className='mt-3 lg:w-96 md:w-full lg:h-64 md:h-64 sm:h-80 relative bg-gray-100'
                    key={i}
                  >
                    <CardBody className='flex flex-col'>
                      <div className='flex items-center mb-3 justify-between'>
                        <span className='text-xs text-center'>{item.since}</span>

                        <Tooltip content='Detail'>
                          <span
                            className='cursor-pointer'
                            onClick={() => {
                              setShowModal(true)
                              setIsID(item.id)
                            }}
                          >
                            <InformationCircleIcon className='w-5 h-5' />
                          </span>
                        </Tooltip>
                      </div>

                      <Typography color='black' className='mb-1 text-lg font-bold font-body'>
                        {item.title}
                      </Typography>
                      <Typography className='text-sm tracking-wide'>{item.info}</Typography>
                      <div className='mt-4 w-ful flex flex-wrap gap-2'>
                        <span className='text-xs text-center p-1 rounded-md border-2 border-blue-400'>
                          {item.tag}
                        </span>

                        {stack.map((item, i) => (
                          <span
                            key={i}
                            className='text-xs text-center p-1 rounded-md'
                            style={{border: `2px solid ${ColorTemplate[i]}`}}
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>

                      <div className='absolute items-center bottom-5 right-4 justify-between w-[90%] flex flex-row-reverse'>
                        {item.demo === true && (
                          <div
                            onClick={() => navigate('/project/sticky-notes')}
                            className='flex items-center cursor-pointer justify-center gap-1 text-sm border-2 p-1 border-blue-gray-400 rounded-md'
                          >
                            Demo <ArrowTopRightOnSquareIcon className='w-4' />
                          </div>
                        )}

                        {item.note && (
                          <span className='text-[10px]'>
                            Note : <i>{item.note}</i>
                          </span>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                )
              })}
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </>
      )}

      <DetailProject setShowModal={setShowModal} showModal={showModal} id={isID} setID={setIsID} />
    </div>
  )
}

export default Project
