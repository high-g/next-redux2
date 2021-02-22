import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountState } from '@/duck/MyButton/countReducer'
import { countIncrement } from '@/duck/MyButton/action'
import { RootState } from '@/store'

const MyButton: FC = () => {
  const mycounter = useSelector<RootState, CountState['counter']>((state: RootState) => state.countReducer.counter)
  const dispatch = useDispatch()

  const handleCountUpBtn = (value: number) => {
    dispatch(countIncrement(value))
  }

  return (
    <div>
      <button
        onClick={() => {
          handleCountUpBtn(1)
        }}
      >
        [+] (MyButton)
      </button>
      <p>※ debug counter: {mycounter}</p>
    </div>
  )
}
export default MyButton
