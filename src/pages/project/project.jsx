import React, {useState, useEffect} from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  IconButton,
} from '@material-tailwind/react'

import PageLoader from '@/components/loader'
import {projectsData} from '@/dataDummy'
import {
  InformationCircleIcon,
  ArrowTopRightOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'
import {ColorTemplate} from '@/helper'
import {useNavigate} from 'react-router-dom'
import DetailProject from '@/components/detail-project/DetailProject'
import githubLogo from '@/assets/img-office/github.png'

export function Project() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isID, setIsID] = useState()

  const newTab = (link) => {
    window.open(link, '_blank')
  }

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
          <Card>
            <CardHeader className='p-5'>
              <Typography>Projects</Typography>
            </CardHeader>
            <CardBody className='flex flex-wrap items-center justify-center gap-5 w-full'>
              {projectsData?.map((item, i) => {
                const {stack} = item
                return (
                  <Card
                    className='mt-3 lg:w-96 md:w-full lg:h-72 md:h-64 sm:h-80 relative bg-gray-100'
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
                        {item.tag?.map((item, i) => (
                          <span
                            key={i}
                            className='text-xs text-center p-1 rounded-md border-2 border-blue-400'
                          >
                            {item}
                          </span>
                        ))}

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
                        {item?.repo === true && (
                          <Tooltip content='Repository'>
                            <IconButton
                              onClick={() => newTab(item.repository)}
                              className='bg-gray-200'
                            >
                              {React.createElement('img', {
                                src: githubLogo,
                                className: 'w-4 h-4',
                                alt: 'github-logo',
                              })}
                            </IconButton>
                          </Tooltip>
                        )}
                        {item.demo === true && (
                          <Tooltip content='Demo'>
                            <IconButton
                              onClick={() => navigate('/project/sticky-notes')}
                              className='bg-gray-200'
                            >
                              <ArrowTopRightOnSquareIcon className='w-4 text-black' />
                            </IconButton>
                          </Tooltip>
                        )}

                        {item.link !== undefined && (
                          <Tooltip content={item.company}>
                            <IconButton
                              onClick={() => window.open(item.link, '_blank')}
                              className='bg-gray-200'
                            >
                              <LinkIcon className='w-4 text-black' />
                            </IconButton>
                          </Tooltip>
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
