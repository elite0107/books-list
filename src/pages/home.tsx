import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSearchQuery } from 'store/slices/searchQuerySlice';
import { SearchBox } from 'components/base/searchBox';
import { Layout } from '../components/layout';
import { useCallback, useMemo, useState } from 'react';
import { useBooks } from 'queries/useBooks';
import { BookCard } from 'components/book/bookCard';
import { Pagination } from 'components/base/pagination';
import { BookPerPage } from 'config/book';

const HomePage = () => {
  const searchQuery = useAppSelector((state) => state.searchQuery.query);
  const dispatch = useAppDispatch();
  const [startNum, setStartNum] = useState(0);
  const { data, isLoading, isError, isPreviousData } = useBooks(searchQuery, startNum);

  const setSearchQueryCallback = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
      setStartNum(0);
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

  const onPaginate = useCallback((start: number) => {
    setStartNum(start);
  }, []);

  return (
    <div className='flex flex-col p-4 items-center gap-8'>
      <SearchBox value={searchQuery} setValue={setSearchQueryCallback} />
      <Pagination
        startIndex={startNum}
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
