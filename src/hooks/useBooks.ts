import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import fetchBooks from 'queries/fetchBooks';
import { DEBOUNCING_TIME } from 'config/global';

// Hooks

const useBooks = (searchQuery: string, startNum: number) => {
  const [searchParams, setSearchParams] = useState(`${searchQuery}:${startNum}`);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchParams(`${searchQuery}:${startNum}`);
    }, DEBOUNCING_TIME);

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
