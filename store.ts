import { notesReducer } from '@/duck/NewNoteInput/notesReducer'
import { countReducer } from '@/duck/MyButton/countReducer'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  countReducer,
  notesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
