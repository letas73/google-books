import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface FetchBooksParametrs {
  searchValue: string
  sort: string
  category: string
}

export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async ({ searchValue, sort, category }: FetchBooksParametrs, {rejectWithValue}) => {
    try {
      const { data } =
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=:intitle:${searchValue}${category !== 'all' ? `:subject:${category}` : ``}&orderBy=${sort}&maxResults=30&key=AIzaSyATrfT9JoHwhosr0IDiKKI5UDlkJxM_-oo`)
      
      return data
    } catch (e) {
      throw new Error('Произошла ошибка, попробуйте перезагрузить страницу')
    }
  }
)

interface BooksState {
  books: any
  status: string
  error?: string | null
}

const initialState: BooksState = {
  books: null,
  status: 'never',
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.error = null
      state.books = null
      state.status = 'loading'
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.books = null
      state.error = action.error.message
      state.status = 'error'
    })
  },
})

export const {  } = booksSlice.actions

export default booksSlice.reducer