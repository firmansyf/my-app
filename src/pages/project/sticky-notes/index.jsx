import {Button} from '@material-tailwind/react'
import React, {useState} from 'react'
import './style.css'
import ModalNote from './ModalNote'

export default function StickyNotes() {
  // const [position, setPosition] = useState({x: 0, y: 0})
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([
    {name: 'Sample 1', priority: 'LOW'},
    {name: 'Sample 2', priority: 'Medium'},
  ])
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
    setShowModal(false)
  }

  return (
    <>
      <main className='h-screen bg-amber-100 p-9 '>
        <Button onClick={() => setShowModal(true)}>Write Note</Button>

        <div className='content bg-red-500'>
          {Array.isArray(data) &&
            data?.map((item, index) => {
              return (
                <div draggable key={index} className='section-content cursor-move shadow-md'>
                  <span className='text-white'>{item?.name}</span>
                </div>
              )
            })}
        </div>
      </main>

      <ModalNote
        notes={notes}
        setShowModal={setShowModal}
        showModal={showModal}
        handleOnClick={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
    </>
  )
}
