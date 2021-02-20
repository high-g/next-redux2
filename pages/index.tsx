import React, { FC } from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { NotesState } from '@/duck/NewNoteInput/notesreducer'
import NewNoteInput from '@/components/NewNoteInput'

const Home: FC = () => {
  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewNoteInput />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
