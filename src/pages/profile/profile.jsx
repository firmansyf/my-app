import {Card, CardBody, Avatar, Input} from '@material-tailwind/react'
import yusuf from '@/assets/img-office/yusuf.jpg'
import {useState, useEffect} from 'react'
import PageLoader from '@/components/loader'

export function Profile() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Card className='mt-12 min-h-[65vh]'>
          <CardBody>
            <section className='flex flex-col'>
              <div className='flex items-center gap-4'>
                <Avatar src={yusuf} size='xxl' className='border-2 border-blue-gray-100' />
                <div className='flex flex-col w-full gap-2'>
                  <span className='text-sm font-semibold lg:w-full text-gray-500 sm:w-4/5'>
                    Account Owner
                  </span>
                  <p className='lg:w-max sm:w-4/5 text-sm text-green-600 font-semibold break-words p-2 rounded-full bg-green-50'>
                    yusuffirmansyamh@gmail.com
                  </p>
                </div>
              </div>

              <div
                className='flex flex-col lg:w-3/4 sm:w-full gap-3 mt-10'
                data-aos='fade-up'
                data-aos-duration='700'
              >
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
                    <p
                      label=''
                      className='w-auto break-word p-2 rounded-md text-blue-gray-500 text-sm'
                      style={{backgroundColor: '#ECEFF1'}}
                    >
                      Bandung Barat, Jawa Barat 40558 Indonesia
                    </p>
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
      )}
    </>
  )
}

export default Profile
