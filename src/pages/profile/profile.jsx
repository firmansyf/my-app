import {Card, CardBody, Avatar, Input} from '@material-tailwind/react'
import yusuf from '@/assets/img-office/yusuf.jpg'

export function Profile() {
  return (
    <>
      <Card className='mt-12 min-h-[65vh]'>
        <CardBody>
          <section className='flex flex-col'>
            <div className='flex items-center gap-4'>
              <Avatar src={yusuf} size='xxl' className='border-2 border-blue-gray-100' />
              <div className='flex flex-col w-full gap-2'>
                <div className='text-sm font-semibold'>Account Owner</div>
                <p className='lg:w-full sm:w-4/5 text-sm break-words'>yusuffirmansyamh@gmail.com</p>
              </div>
            </div>

            <div className='flex flex-col lg:w-3/4 sm:w-full gap-3 mt-10'>
              <div className='flex flex-1 gap-4 sm:flex-col lg:flex-row'>
                <div className='w-full'>
                  <label>First Name</label>
                  <Input label='Yusuf' disabled />
                </div>
                <div className='w-full'>
                  <label>Last Name</label>
                  <Input label='Firmansyah' disabled />
                </div>
              </div>

              <div className='flex flex-1 gap-4 sm:flex-col lg:flex-row'>
                <div className='w-full'>
                  <label>Email</label>
                  <Input label='yusuffirmansyamh@gmail.com' disabled />
                </div>
                <div className='w-full'>
                  <label>Job Title</label>
                  <Input label='Frontend Developer' disabled />
                </div>
              </div>

              <div className='flex flex-1 gap-4 sm:flex-col lg:flex-row'>
                <div className='w-full'>
                  <label>Domicile</label>
                  <Input label='Bandung Barat, Jawa Barat 40558 Indonesia ' disabled />
                </div>
                <div className='w-full'>
                  <label>Phone Number / WhatsApp</label>
                  <Input label='+62 85156948098' disabled />
                </div>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>
    </>
  )
}

export default Profile
