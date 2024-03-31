import PageLoader from '@/components/loader'
import {experienceData, skillData} from '@/dataDummy'
import {CodeBracketSquareIcon, BriefcaseIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import {Button, Card, CardBody, Typography} from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import univImg from '@/assets/img-office/univ-img.png'

export function About() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const onClick = () => {
    const urlResume =
      'https://docs.google.com/document/d/1hdqctVwdioIrsrBEexfKS4-QutgKRCLif-x1Mdb17WU/edit?usp=sharing'
    window.open(urlResume, '_blank')
  }

  return (
    <div className='my-14 w-full flex items-center flex-col gap-8'>
      {loading ? (
        <PageLoader />
      ) : (
        <Card className='p-3' data-aos='fade-up' data-aos-duration='700'>
          <Typography variant='h5' className='m-4 font-normal md:leading-loose sm:leading-relaxed'>
            A short story of me, not important but seem better than nothing.
          </Typography>
          <CardBody className='p-4'>
            <Typography variant='h6' className='tracking-wide leading-relaxed font-normal'>
              Hi there! Thanks for visiting my personal website.
            </Typography>
            <Typography variant='h6' className='tracking-wide font-normal mt-3 leading-relaxed'>
              {"I'm"} Yusuf. Whith over 2+ years of experience in Frontend Web Developer. {"I'm"}{' '}
              well-versed in Project Management methods like Waterfall and Agile. {"I'm"}{' '}
              particularly passionate about frontend side, where I focus on creating web
              applications that are not only precise but also user-friendly experiences.
            </Typography>
            <Typography variant='h6' className='tracking-wide font-normal mt-3 leading-relaxed'>
              I specialize in JavaScript, also {"it's"} frameworks, including React (Next.js, Vite).
              I love exploring new web technologies and features.
            </Typography>
            <Typography variant='h6' className='tracking-wide font-normal mt-3 leading-relaxed'>
              I firmly believe that effective communication is vital for success in any role
            </Typography>
            <Typography variant='h6' className='tracking-wide font-normal mt-3 leading-relaxed'>
              {"I'm"} adaptable, think efficiently, and always strive for excellence. My experience
              has equipped me with strong analytical skills and leadership abilities, and {"I'm"}{' '}
              equally comfortable working collaboratively in a team. {"I'm"} excited about the
              opportunity to contribute to the {"team's"} success.
            </Typography>
            <Typography
              variant='paragraph'
              className='tracking-wide font-normal mt-3 leading-relaxed'
            >
              Looking forward to the possibility of collaboration!
            </Typography>

            <div className='my-6'>
              <Button className='' onClick={onClick} color='green' variant='outlined' size='md'>
                Download Resume
              </Button>
            </div>

            <hr className='bg-gray-200' style={{height: '0.1rem'}} />

            <div className='my-6'>
              <Typography variant='h5' className='font-medium flex items-center gap-1 mb-2'>
                <CodeBracketSquareIcon className='w-6' />
                Skill
              </Typography>
              <span className='text-md tracking-wide'>My professional skills.</span>
            </div>

            <section className='skil-section flex flex-wrap gap-2 py-7 border-b-2 border-t-2'>
              {skillData?.map((item, i) => {
                return (
                  <div key={i} className='flex items-center gap-1 border-2 p-2 rounded-xl'>
                    <img src={item.icon} alt='avatar' size='xs' className='h-6' />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </section>

            <div className='my-6'>
              <Typography variant='h5' className='font-medium flex items-center gap-1 mb-2'>
                <BriefcaseIcon className='w-5' /> Career
              </Typography>
              <span className='text-md tracking-wide'>My professional career journey.</span>
            </div>

            <section className='flex flex-wrap gap-3 sm:flex-col lg:flex-row'>
              {experienceData.map((item, i) => {
                return (
                  <div
                    className='flex my-2 p-3 border-2 rounded-xl bg-slate-50 lg:w-[48%] md:w-full sm:w-full'
                    key={i}
                  >
                    <div className='flex sm:flex-col gap-2 md:flex-col lg:flex-row p-3 items-center justify-center w-full'>
                      <div className='img-company md:flex-1  flex justify-center items-center mx-2'>
                        <img
                          src={item.icon}
                          alt='company-logo'
                          className='w-16 rounded-full border-3 shadow-md p-1'
                        />
                      </div>
                      <div className='w-full flex md:flex-1 flex-col mx-2 justify-center items-center'>
                        <h2 className=''>{item.position}</h2>
                        <div className='flex flex-col w-full justify-center items-center'>
                          <div className=' flex flex-col w-full items-center justify-center'>
                            <span className='text-sm text-slate-500 text-center mr-2 tracking-wide leading-relaxed'>
                              {item.title},
                            </span>
                            <span className='text-sm text-slate-500'>{item.kota}</span>
                          </div>
                          <span className='text-slate-400 text-sm tracking-wide leading-relaxed'>
                            {item.jenis_pekerjaaan}
                          </span>
                        </div>
                        <span className='text-xs text-slate-500 mt-2'>{item.since}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </section>

            <hr className='bg-gray-200 my-7' style={{height: '0.1rem'}} />

            <div className='my-6'>
              <Typography variant='h5' className='font-medium flex items-center gap-1 mb-2'>
                <AcademicCapIcon className='w-5' /> Education
              </Typography>
              <span className='text-md tracking-wide'>My education journey.</span>
            </div>

            <section className='w-full mb-7'>
              <div className='flex my-2 p-3 border-2 rounded-xl bg-slate-50 w-full'>
                <div className='flex lg:flex-row md:flex-col sm:flex-col sm:gap-2 p-3 items-center w-full sm:justify-center'>
                  <div className='img-company mx-2'>
                    <img
                      src={univImg}
                      alt='company-logo'
                      className='w-20 rounded-full border-white border-3'
                    />
                  </div>
                  <div className='flex flex-col mx-2 w-full justify-center sm:items-center lg:items-start'>
                    <Typography className='text-xl font-bold text-center'>
                      Universitas Widyatama
                    </Typography>

                    <section className='flex sm:flex-col lg:flex-row items-center sm:justify-center text-lg lg:gap-2 text-slate-500 mr-2 tracking-wide leading-relaxed'>
                      <span>college student </span>
                      <span className="mx-auto lg:mt-1 sm:my-1 block h-2 w-2 rounded-full bg-blue-gray-300 content-['']" />{' '}
                      <span> Informatics Engineering</span>
                    </section>

                    <span className='text-xs text-slate-500 mt-2'>2023 - 2027</span>
                  </div>
                </div>
              </div>
            </section>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

export default About
