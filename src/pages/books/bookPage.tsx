import { Layout } from 'components/layout';
import { useBook } from 'queries/useBook';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCurrentBook } from 'store/slices/booksSlice';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';

const BookPage = () => {
  const { book_id } = useParams();
  const book = useAppSelector((state) => state.books.currentBook);
  const dispatch = useAppDispatch();

  const { data, isLoading, isError, refetch } = useBook(book_id!);

  useEffect(() => {
    if (!book) refetch();
  }, [book, refetch]);

  useEffect(() => {
    if (data && !isLoading && !isError) dispatch(setCurrentBook(data));
  }, [data, dispatch, isError, isLoading]);

  return (
    <div className='flex flex-col p-4 gap-8 w-auto md:w-[48rem] mx-auto'>
      <Link
        to='/'
        className='inline-flex items-center cursor-pointer mr-auto gap-2 mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <ArrowSmallLeftIcon className='w-4 h-4' />
        To the list page
      </Link>
      <Layout loading={isLoading && !book} error={isError}>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col sm:flex-row'>
            <div className='mx-auto sm:mx-0 shrink-0 w-48 h-64 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center p-4'>
              {book?.volumeInfo.imageLinks && (
                <img
                  src={book?.volumeInfo.imageLinks.smallThumbnail}
                  alt='thumbnail'
                  className='rounded-lg h-full'
                />
              )}
              {!book?.volumeInfo.imageLinks && (
                <div className='text-black dark:text-gray-200'>No Thumbnail</div>
              )}
            </div>
            <div className='flex flex-col p-8 gap-2'>
              <p className='text-2xl font-bold tracking-tight text-gray-900 mb-2 dark:text-white'>
                {book?.volumeInfo.title}
              </p>
              <p className='text-gray-700 dark:text-gray-400'>
                {book?.volumeInfo.authors && book?.volumeInfo.authors.length > 0
                  ? book?.volumeInfo.authors.join(', ')
                  : ''}
              </p>
              <p className='text-gray-700 dark:text-gray-400'>{book?.volumeInfo.publishedDate}</p>
              <p className='text-gray-700 dark:text-gray-400'>{book?.volumeInfo.publisher}</p>
            </div>
          </div>
          <div
            className='tracking-tight text-gray-900 mb-2 dark:text-white'
            dangerouslySetInnerHTML={{ __html: book?.volumeInfo.description ?? '' }}
          ></div>
        </div>
      </Layout>
    </div>
  );
};

export default BookPage;
