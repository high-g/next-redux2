export type Action = {
  type: 'count/increment'
  payload: number
}

export const countIncrement = (value: Action): Action => ({
  type: 'count/increment',
  payload: value,
})
