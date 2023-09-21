import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act } from 'react-dom/test-utils';
import { DEBOUNCING_TIME, BOOKS_PER_PAGE } from 'config';
import { renderWithProviders } from '__test__/test-utils';
import HomePage from 'pages/home';
import fetchBooks from 'queries/fetchBooks';
import { BooksQuery } from 'types';

import books from '../constants/books.json';

const mockFetchBooks = fetchBooks as jest.Mock<ReturnType<typeof fetchBooks>>;

jest.mock('queries/fetchBooks');
jest.useFakeTimers();

describe('test home page', () => {
  beforeEach(() => {
    mockFetchBooks.mockReturnValue(
      Promise.resolve({ totalItems: 20, items: books.items } as BooksQuery),
    );
  });

  it('render page', () => {
    renderWithProviders(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </QueryClientProvider>,
    );
  });

  it('check render all books', async () => {
    renderWithProviders(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      const bookList = screen.getByTestId('book-list');
      expect(bookList).toBeInTheDocument();
      expect(bookList.children.length).toBe(BOOKS_PER_PAGE);
    });
  });

  it('check loading and error component if there is an error', async () => {
    mockFetchBooks.mockReturnValue(Promise.reject('testing error'));

    renderWithProviders(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('page-error')).toBeInTheDocument();
    });
  });

  it('test search debouncing', async () => {
    renderWithProviders(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    const searchBox = screen.getByTestId('search');
    fireEvent.change(searchBox, { target: { value: 'A' } });

    await waitFor(() => {
      expect(mockFetchBooks).toBeCalledTimes(2);
    });

    await act(async () => {
      fireEvent.change(searchBox, { target: { value: 'AB' } });
      expect(mockFetchBooks).toBeCalledTimes(2);
      jest.advanceTimersByTime(DEBOUNCING_TIME - 1);
    });

    expect(mockFetchBooks).toBeCalledTimes(2);

    await act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(mockFetchBooks).toBeCalledTimes(3);

    await act(async () => {
      fireEvent.change(searchBox, { target: { value: 'ABC' } });
      expect(mockFetchBooks).toBeCalledTimes(3);
      jest.advanceTimersByTime(DEBOUNCING_TIME);
    });

    expect(mockFetchBooks).toBeCalledTimes(4);
  });
});
