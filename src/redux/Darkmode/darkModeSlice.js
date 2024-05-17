import { createSlice } from '@reduxjs/toolkit'

const initialState = 'light'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    changeMode: (state) => (state === 'light' ? 'dark' : 'light'),
  },
})


export const {changeMode } = darkModeSlice.actions

export default darkModeSlice.reducer