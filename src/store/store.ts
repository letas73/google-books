import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import booksSlice from './slices/books'
import bookSlice from './slices/book'
import filterSlice from './slices/filter'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    books: booksSlice,
    book: bookSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector