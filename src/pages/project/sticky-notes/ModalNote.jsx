/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Button,
  Input,
} from '@material-tailwind/react'
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function ModalNote({setShowModal, showModal, handleOnClick, handleOnChange, notes}) {
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <Dialog open={showModal} size='xs' handler={handleClose}>
      <DialogHeader>Sticky Notes</DialogHeader>
      <DialogBody className='py-0 flex flex-col gap-4'>
        <div className='w-full'>
          <Input
            placeholder='Enter your item'
            className='outline-none'
            name='name'
            value={notes.name}
            autoComplete='off'
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className='w-full'>
          <select
            label='Select Priority'
            name='priority'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={notes.priorty}
            onChange={(e) => handleOnChange(e)}
          >
            <option value=''>Choose Priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='highest'>Highest</option>
          </select>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant='text' color='red' onClick={handleClose} className='mr-1'>
          <span>Cancel</span>
        </Button>
        <Button variant='gradient' color='green' onClick={handleOnClick}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
