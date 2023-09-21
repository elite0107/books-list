import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import booksReducer from '../store/slices/booksSlice';
import searchQueryReducer from '../store/slices/searchQuerySlice';

import type { AppStore, RootState } from '../store/store';
import books from './constants/books.json';
import { Book } from 'types';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      books: { books: books.items as Book[] },
      searchQuery: { query: '', pageStartNum: 0 },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { books: booksReducer, searchQuery: searchQueryReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
