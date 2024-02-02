import {Button, Card, CardBody, Input, Typography} from '@material-tailwind/react'
import React, {useState} from 'react'

export default function StickyNotes() {
  const [data, setData] = useState([])
  const [notes, setNotes] = useState({
    name: '',
    priority: '',
  })

  const handleOnChange = (e) => {
    const val = e.target.value
    let res = {...notes}
    res[e.target.name] = val !== undefined ? val : e
    setNotes(res)
    console.log(res)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let result = [...data]
    result.push({
      name: notes.name,
      priority: notes.priority,
    })

    setData(result)
    setNotes({name: '', priority: ''})
  }

  return (
    <main className='h-screen bg-amber-100 p-9'>
      <Card className='card w-1/4'>
        <CardBody className='flex flex-col gap-3 p-4'>
          <Typography>Sticky Notes</Typography>
          <div className='w-full'>
            <Input
              placeholder='Enter your item'
              className='outline-none'
              name='name'
              value={notes.name}
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
          <div>
            <Button size='sm' onClick={handleOnSubmit}>
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
      <div className='content'>
        {Array.isArray(data) &&
          data?.map((item, i) => {
            return <></>
          })}
      </div>
    </main>
  )
}
