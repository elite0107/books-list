import { BOOKS_PER_PAGE } from 'config';
import { BooksQuery } from 'types';

const fetchBooks = async (query: string, startNum: number): Promise<BooksQuery> => {
  const response = await fetch(
    `${process.env.REACT_APP_GOOGLE_BOOK_API_BASE_URL}?key=${process.env.REACT_APP_USER_KEY}&q=${
      query || 'google'
    }&maxResults=${BOOKS_PER_PAGE}&startIndex=${startNum}`,
  );

  if (!response.ok) throw new Error('Network response was not ok');

  localStorage.setItem('search-query', query);
  localStorage.setItem('page-start-number', startNum.toString());

  return response.json();
};

export default fetchBooks;
