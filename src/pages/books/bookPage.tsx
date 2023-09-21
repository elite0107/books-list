import { Layout } from 'components/layout';
import { useBook } from 'queries/useBook';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCurrentBook } from 'store/slices/booksSlice';

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
    <div className='flex flex-col p-4 items-center gap-8'>
      <Link
        to='/'
        className='inline-flex items-center cursor-pointer mx-auto mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        To the list page
      </Link>
      <Layout loading={isLoading && !book} error={isError}>
        <div className='flex items-center justify-center'>Books Page</div>
      </Layout>
    </div>
  );
};

export default BookPage;
