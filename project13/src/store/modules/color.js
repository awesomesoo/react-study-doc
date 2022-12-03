import { createSlice } from '@reduxjs/toolkit'

export const colorSlice = createSlice({
  name: 'colorstyle',
  initialState: { color: 'orange' },
  reducers: {
    red: state => {
      state.color = 'red'
    },
    green: state => {
      state.color = 'green'
    },
    blue: (state, action) => {
      state.color = 'blue'
    },

    pink: (state, action) => {
      state.color = 'pink'
    },
  },
})

// Action creators are generated for each case reducer function
export const { red, green, blue, pink } = colorSlice.actions

export default colorSlice.reducer

/* 
    red: (state, action) => {},
    green: (state, action) => {},
    blue: (state, action) => {},
    pink: (state, action) => {},
*/
