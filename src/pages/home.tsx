import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setSearchQuery } from 'store/slices/searchQuerySlice';
import { SearchBox } from 'components/base/searchBox';
import { Layout } from '../components/layout';
import { useCallback, useMemo } from 'react';
import { useBooks } from 'queries/useBooks';
import { BookCard } from 'components/book/bookCard';

const HomePage = () => {
  const searchQuery = useAppSelector((state) => state.searchQuery.query);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useBooks(searchQuery);

  console.log(data, isLoading, isError);

  const setSearchQueryCallback = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch],
  );

  const bookList = useMemo(() => {
    return (
      <div className='flex flex-wrap'>
        {data?.items.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    );
  }, [data]);

  return (
    <Layout loading={isLoading} error={isError}>
      <div className='flex flex-col bg-gray-200 p-4 items-center gap-8'>
        <SearchBox value={searchQuery} setValue={setSearchQueryCallback} />
        {bookList}
      </div>
    </Layout>
  );
};

export default HomePage;
