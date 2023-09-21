import { useQuery } from '@tanstack/react-query';
import { BookPerPage } from 'config/book';
import { useEffect, useState } from 'react';
import { BooksQuery } from 'types';

const fetchLocations = async (query: string, startNum: number): Promise<BooksQuery> => {
  const response = await fetch(
    `${process.env.REACT_APP_GOOGLE_BOOK_API_BASE_URL}&q=${
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

  return useQuery(['books', searchParams], () => fetchLocations(searchQuery, startNum), {
    select: (response) => {
      return response;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export { useBooks };
