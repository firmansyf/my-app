import {articlesData} from '@/dataDummy'
import {ClockIcon} from '@heroicons/react/24/solid'
import {Card, CardBody, Typography} from '@material-tailwind/react'

export function Blog() {
  const handleOnClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='my-10 w-full flex max-w-screen-lg flex-col'>
      <Card className='w-full'>
        <CardBody>
          <Typography>Latest post</Typography>
          {articlesData?.map((item, i) => {
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
      </Card>
    </div>
  )
}

export default Blog
