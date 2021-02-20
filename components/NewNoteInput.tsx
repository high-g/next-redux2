import { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

const NewNoteInput = () => {
  // textareの値管理
  const [note, setNote] = useState<string>('')

  // グローバルstateのフック
  const dispatch = useDispatch()

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const addNote = (note: string) => {
    dispatch({ type: 'notes/add', payload: note })
  }

  const handleAddNote = () => {
    addNote(note)
    setNote('')
  }

  return (
    <div>
      <input onChange={updateNote} value={note} type="text" />
      <button onClick={handleAddNote}>[add note]</button>
      <div>debug:{note}</div>
    </div>
  )
}

export default NewNoteInput
