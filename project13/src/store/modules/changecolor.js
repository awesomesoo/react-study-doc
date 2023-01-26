import { createSlice } from '@reduxjs/toolkit'

const initialState = { color: 'tomato' }
export const changeColorSlice = createSlice({
  name: 'colorChange',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})

export const { changeColor } = changeColorSlice.actions
export default changeColorSlice.reducer
