export interface CountState {
  counter: number
}

const initialState = {
  counter: 0,
}

type Action = {
  type: 'count/increment'
  payload: number
}

export const countReducer = (state: CountState = initialState, action: Action) => {
  switch (action.type) {
    case 'count/increment':
      return { counter: state.counter + action.payload }

    default:
      return state
  }
}
