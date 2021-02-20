import { notesReducer } from '@/duck/NewNoteInput/notesreducer.ts'
import { createStore } from 'redux'

export const store = createStore(notesReducer)
