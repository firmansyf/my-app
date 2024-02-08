import React, {useState} from 'react'
import {XMarkIcon, InformationCircleIcon, PencilIcon} from '@heroicons/react/24/solid'
import {Button, IconButton, Tooltip} from '@material-tailwind/react'
import './style.css'
import {ColorTemplate} from '@/helper'

export default function StickyNotes() {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        x: 150,
        y: 50,
        isDragging: false,
      },
    ])
  }

  const handleMouseDown = (id, e) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {...note, isDragging: true, dx: e.clientX - note.x, dy: e.clientY - note.y}
          : note
      )
    )
  }

  const handleMouseMove = (id, e) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id && note.isDragging
          ? {...note, x: e.clientX - note.dx, y: e.clientY - note.dy}
          : note
      )
    )
  }

  const handleMouseUp = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? {...note, isDragging: false} : note))
    )
  }

  const deleteNote = (val) => {
    let data = [...notes]
    const res = data.filter((f) => f.id !== val?.id)
    setNotes(res)
  }

  return (
    <main className='h-screen bg-amber-100 p-0 relative'>
      <Button
        onClick={addNote}
        variant=''
        className='is-button flex gap-2 items-center bg-blue-gray-600 z-40 outline-none'
      >
        <PencilIcon className='w-4 text-yellow-500' />
        Write
      </Button>

      {notes?.length === 0 && (
        <div className='text-default w-full tracking-wide'>Click Button {' "Write" '}</div>
      )}

      {notes.map((item, i) => (
        <div
          key={item.id}
          className={`flex flex-col sticky-note shadow-md rounded-lg`}
          style={{top: item.y, left: item.x, backgroundColor: `${ColorTemplate[i]}`}}
          onMouseDown={(e) => handleMouseDown(item.id, e)}
          onMouseMove={(e) => handleMouseMove(item.id, e)}
          onMouseUp={() => handleMouseUp(item.id)}
        >
          <div className='sticky-note-header rounded-t-lg p-2 flex items-center justify-between'>
            <Tooltip content='You can drag this your note'>
              <InformationCircleIcon className='w-5 cursor-pointer' />
            </Tooltip>
            Sticky Note
            <Tooltip content='Delete'>
              <IconButton
                onClick={() => deleteNote(item)}
                variant='outlined'
                className='rounded-full w-5 h-5'
              >
                <XMarkIcon className='w-4' />
              </IconButton>
            </Tooltip>
          </div>
          <textarea
            id='message'
            rows='4'
            className='block p-2.5 w-full text-sm rounded-lg'
          ></textarea>
        </div>
      ))}
    </main>
  )
}
