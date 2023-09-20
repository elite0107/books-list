import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { BooksQuery } from 'types';

const fetchLocations = async (query: string): Promise<BooksQuery> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query || 'google'}&maxResults=12`,
  );
  return response.json();
};

// Hooks

const debouncing = 300; // 300ms

const useBooks = (searchQuery: string) => {
  const [searchParams, setSearchParams] = useState(searchQuery);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchParams(searchQuery);
    }, debouncing);

    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return useQuery(['books', searchParams], () => fetchLocations(searchQuery), {
    select: (response) => {
      return response;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

export { useBooks };
