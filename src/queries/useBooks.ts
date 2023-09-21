import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BookPerPage } from 'config/book';
import { BooksQuery } from 'types';

const fetchBooks = async (query: string, startNum: number): Promise<BooksQuery> => {
  const response = await fetch(
    `${process.env.REACT_APP_GOOGLE_BOOK_API_BASE_URL}?key=${process.env.REACT_APP_USER_KEY}&q=${
      query || 'google'
    }&maxResults=${BookPerPage}&startIndex=${startNum}`,
  );

  if (!response.ok) throw new Error('Network response was not ok');

  localStorage.setItem('search-query', query);
  localStorage.setItem('page-start-number', startNum.toString());

  return response.json();
};

// Hooks

const debouncing = 300; // 300ms

const useBooks = (searchQuery: string, startNum: number) => {
  const [searchParams, setSearchParams] = useState(`${searchQuery}:${startNum}`);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchParams(`${searchQuery}:${startNum}`);
    }, debouncing);

    return () => clearTimeout(timerId);
  }, [searchQuery, startNum]);

  return useQuery(['books', searchParams], () => fetchBooks(searchQuery, startNum), {
    select: (response) => {
      return response;
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: true,
  });
};

export { useBooks };
