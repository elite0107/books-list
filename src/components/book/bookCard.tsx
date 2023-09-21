import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { setCurrentBook } from 'store/slices/booksSlice';
import { Book } from 'types';

export const BookCard = ({ book }: { book: Book }) => {
  const dispatch = useAppDispatch();

  const onNavigateToBookDetail = useCallback(() => {
    dispatch(setCurrentBook(book));
  }, [dispatch, book]);

  return (
    <div className='w-64 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2'>
      <div className='flex items-center justify-center h-48 mb-4'>
        {book.volumeInfo.imageLinks && (
          <img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt='thumbnail'
            className='h-full rounded-lg'
            data-testid='thumbnail'
          />
        )}
        {!book.volumeInfo.imageLinks && (
          <div className='text-black dark:text-gray-200' data-testid='no-thumbnail'>
            No Thumbnail
          </div>
        )}
      </div>
      <h5
        className='font-bold tracking-tight text-gray-900 dark:text-white'
        data-testid='book-title'
      >
        {book.volumeInfo.title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400 mb-2' data-testid='book-author'>
        {book.volumeInfo.authors && book.volumeInfo.authors.length > 0
          ? book.volumeInfo.authors[0]
          : ''}
      </p>
      <Link
        to={`books/${book.id}`}
        onClick={onNavigateToBookDetail}
        className='inline-flex items-center cursor-pointer mx-auto mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Read more
        <ArrowRightIcon className='w-3.5 h-3.5 ml-2' />
      </Link>
    </div>
  );
};
