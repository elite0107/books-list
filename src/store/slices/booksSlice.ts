import { createSlice } from '@reduxjs/toolkit';
import { BooksState } from 'types';

// Define the initial state using that type
const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = booksSlice.actions;

export default booksSlice.reducer;
