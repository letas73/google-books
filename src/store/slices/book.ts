import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BookState {
  book: any
}

const initialState: BookState = {
  book: null,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setCurrentBook(state, action) {
      state.book = action.payload
    }
  },
})

export const { setCurrentBook } = bookSlice.actions

export default bookSlice.reducer