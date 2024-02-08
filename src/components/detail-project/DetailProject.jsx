/* eslint-disable react/prop-types */
import {Dialog, DialogBody, Button, DialogHeader, DialogFooter} from '@material-tailwind/react'

export default function DetailProject({showModal, setShowModal}) {
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <Dialog open={showModal} handler={handleClose}>
        <DialogHeader>Modal Detail.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way, it took me twenty
          five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m
          never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv.
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
