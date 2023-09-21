import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import searchQueryReducer from './slices/searchQuerySlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    searchQuery: searchQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
