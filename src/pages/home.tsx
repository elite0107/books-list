import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageStartNum, setSearchQuery } from 'store/slices/searchQuerySlice';
import { setBooks } from 'store/slices/booksSlice';
import { useBooks } from 'queries/useBooks';
import { BookPerPage } from 'config/book';
import { SearchBox } from 'components/base/searchBox';
import { BookCard } from 'components/book/bookCard';
import { Pagination } from 'components/base/pagination';
import { Layout } from '../components/layout';

const HomePage = () => {
  const { query, pageStartNum } = useAppSelector((state) => state.searchQuery);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isPreviousData } = useBooks(query, pageStartNum);

  useEffect(() => {
    if (data && data.items && !isPreviousData && !isError) {
      dispatch(setBooks(data?.items));
    }
  }, [dispatch, data, isError, isPreviousData]);

  const setSearchQueryCallback = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
      dispatch(setPageStartNum(0));
    },
    [dispatch],
  );

  const onPaginate = useCallback(
    (start: number) => {
      dispatch(setPageStartNum(start));
    },
    [dispatch],
  );

  const bookList = useMemo(() => {
    return (
      <div className='flex flex-wrap justify-center gap-4'>
        {data?.items?.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    );
  }, [data]);

  return (
    <div className='flex flex-col p-4 items-center gap-8'>
      <SearchBox value={query} setValue={setSearchQueryCallback} />
      <Pagination
        startIndex={pageStartNum}
        count={BookPerPage}
        totalNumber={data?.totalItems ?? 0}
        onPaginate={onPaginate}
      />
      <Layout loading={isLoading || isPreviousData} error={isError}>
        {bookList}
      </Layout>
    </div>
  );
};

export default HomePage;
