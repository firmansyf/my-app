/* eslint-disable react/prop-types */
import {projectsData} from '@/dataDummy'
import {Dialog, DialogBody, Button, DialogHeader, DialogFooter} from '@material-tailwind/react'
import {useEffect, useState} from 'react'

export default function DetailProject({showModal, setShowModal, id, setID}) {
  const [detail, setDetail] = useState({})

  useEffect(() => {
    if (id) {
      setDetail(projectsData.find((item, _) => item.id === id))
    }
  }, [id])

  const handleClose = () => {
    setShowModal(false)
    setDetail({})
    setID()
  }

  return (
    <>
      <Dialog open={showModal} handler={handleClose}>
        <DialogHeader>Detail Of {detail?.title}</DialogHeader>
        <DialogBody className='flex flex-col gap-5'>
          <img src={detail.img} alt={detail?.title} className='w-full h-72 border-2 shadow-md' />
          <section className='flex flex-col gap-2'>
            <div className='w-full'>
              <label>Description</label>
              <p className='bg-gray-200  p-3'>{detail.description}</p>
            </div>
            <div className='w-full'>
              <label>Title</label>
              <p className='bg-gray-200 p-3'>{detail.title}</p>
            </div>
          </section>
        </DialogBody>
        <DialogFooter>
          <Button variant='text' color='blue-gray' onClick={handleClose} className='mr-1'>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
