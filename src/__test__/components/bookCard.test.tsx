import { screen } from '@testing-library/react';
import { BookCard } from 'components/book/bookCard';
import books from '../constants/books.json';
import { Book } from 'types';
import { renderWithProviders } from '__test__/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('test book card component', () => {
  it('test render book card component', () => {
    renderWithProviders(
      <BrowserRouter>
        <BookCard book={books.items[0] as Book} />
      </BrowserRouter>,
    );
  });
});
