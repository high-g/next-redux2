import React, { FC } from 'react'
import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountState } from '@/duck/MyButton/countReducer'
import { NotesState } from '@/duck/NewNoteInput/notesReducer'
import { countIncrement } from '@/duck/MyButton/action'
import { RootState } from '@/store'
import MyButton from '@/components/MyButton'
import NewNoteInput from '@/components/NewNoteInput'

const Home: FC = () => {
  const counter = useSelector<RootState, CountState['counter']>((state: RootState) => state.countReducer.counter)
  const notes = useSelector<RootState, NotesState['notes']>((state: RootState) => state.notesReducer.notes)

  const dispatch = useDispatch()

  const handleCountUpBtn = (value: number) => {
    dispatch(countIncrement(value))
  }

  return (
    <div>
      <div>
        counter: {counter}
        <div>
          <button
            onClick={() => {
              handleCountUpBtn(1)
            }}
          >
            [+] (index.tsx)
          </button>
          <br />
          <MyButton />
        </div>
      </div>
      <div>
        <NewNoteInput />
        <hr />
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
