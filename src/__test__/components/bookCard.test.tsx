import { getByTestId, screen } from '@testing-library/react';
import { BookCard } from 'components/book/bookCard';
import books from '../constants/books.json';
import { Book } from 'types';
import { renderWithProviders } from '__test__/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('test book card component', () => {
  it('test render book card component', () => {
    const book = books.items[0] as Book;

    renderWithProviders(
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
    expect(screen.getByTestId('book-title').innerHTML).toBe(book.volumeInfo.title);
    expect(screen.getByTestId('book-author').innerHTML).toBe(
      book.volumeInfo.authors && book.volumeInfo.authors.length > 0
        ? book.volumeInfo.authors[0]
        : '',
    );
  });

  it('test render book card component with no thumbnail and no author', () => {
    const book = books.items[0] as Book;

    book.volumeInfo.imageLinks = undefined;
    book.volumeInfo.authors = [];

    renderWithProviders(
      <BrowserRouter>
        <BookCard book={book} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('no-thumbnail')).toBeInTheDocument();
    expect(screen.getByTestId('book-author')).toBeEmptyDOMElement();
  });
});
