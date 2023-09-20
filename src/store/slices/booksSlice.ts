import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BooksState } from '../types';

// Define the initial state using that type
const initialState: BooksState = {
  value: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = booksSlice.actions;

export default booksSlice.reducer;
