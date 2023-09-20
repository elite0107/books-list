import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setPageStartNum, setSearchQuery } from 'store/slices/searchQuerySlice';
import { SearchBox } from 'components/base/searchBox';
import { Layout } from '../components/layout';
import { useCallback, useMemo } from 'react';
import { useBooks } from 'queries/useBooks';
import { BookCard } from 'components/book/bookCard';
import { Pagination } from 'components/base/pagination';
import { BookPerPage } from 'config/book';

const HomePage = () => {
  const { query, pageStartNum } = useAppSelector((state) => state.searchQuery);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isPreviousData } = useBooks(query, pageStartNum);

  const setSearchQueryCallback = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
      dispatch(setPageStartNum(0));
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

  const onPaginate = useCallback(
    (start: number) => {
      dispatch(setPageStartNum(start));
    },
    [dispatch],
  );

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
