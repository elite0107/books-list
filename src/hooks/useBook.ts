import { useQuery } from '@tanstack/react-query';
import { Book } from 'types';

const fetchBook = async (volumeId: string): Promise<Book> => {
  const response = await fetch(
    `${process.env.REACT_APP_GOOGLE_BOOK_API_BASE_URL}/${volumeId}?key=${process.env.REACT_APP_USER_KEY}`,
  );

  if (!response.ok) throw new Error('Network response was not ok');

  return response.json();
};

// Hooks

const useBook = (volumeId: string) => {
  return useQuery(['book', volumeId], () => fetchBook(volumeId), {
    select: (response) => {
      return response;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
  });
};

export { useBook };
