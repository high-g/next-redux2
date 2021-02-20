export interface NotesState {
  notes: string[]
}

const initialState = {
  notes: [],
}

type Action = {
  type: 'notes/add'
  payload: string
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch (action.type) {
    case 'notes/add':
      return { ...state, notes: [...state.notes, action.payload] }

    default:
      return state
  }
}
