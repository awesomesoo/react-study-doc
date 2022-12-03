import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // 이 공간은 자바스크립트 함수이다.
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload //payload 는 정해져있는 문법이다. payload 안에 뭐가 있으면 payload.XXX 라고 쓴다
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  countSlice.actions

export default countSlice.reducer
