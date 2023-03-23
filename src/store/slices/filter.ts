import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  category: string
  sort: string
}

const initialState: FilterState = {
  category: 'all',
  sort: 'relevance',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload
    }
  },
})

export const { setSort, setCategory } = filterSlice.actions

export default filterSlice.reducer