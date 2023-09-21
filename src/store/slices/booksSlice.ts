import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Book, BooksState } from 'types';

// Define the initial state using that type
const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setCurrentBook: (state, action: PayloadAction<Book>) => {
      state.currentBook = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBooks, setCurrentBook } = booksSlice.actions;

export default booksSlice.reducer;
