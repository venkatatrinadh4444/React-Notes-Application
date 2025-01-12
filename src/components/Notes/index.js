// Write your code here

import { useState } from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import Card from '../NoteItem/index'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [emptyData, setEmptyData] = useState(0)

  const [notesItemData, setNotesItemData] = useState([])

  const addItem = e => {
    e.preventDefault()
    const dataFromInput = {
      id: uuidv4(),
      title,
      description,
    }
    setNotesItemData(prevState => [...prevState, dataFromInput])
    setTitle('')
    setDescription('')
    setEmptyData(prevState => prevState + 1)
  }

  return (
    <div className='NotesContainer'>
      <h1 className='Title'>Notes</h1>
      <form className='NotesDataContainer'>
        <input className='Input'
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input className='Input'
          type="text"
          placeholder="Take a Note..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className='ButtonDiv'>
          <button className='Button' type="submit" onClick={addItem}>
            Add
          </button>
        </div>
      </form>
      {emptyData > 0 ? (
        <ul className='NotesItems'>
          {notesItemData.map(eachItem => (
            <Card key={eachItem.id} cardData={eachItem} />
          ))}
        </ul>
      ) : (
        <div className='NoNotesItems'>
          <div className='NoNotesItemsContent'>
            <img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              width="100px"
            />
            <h1>No Notes Yet</h1>
            <p>Notes you add will appear here</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notes