import { Book } from 'types';

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className='w-64 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2'>
      <div className='flex items-center justify-center h-48 mb-4'>
        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt='thumbnail' className='h-full' />
        )}
        {!book.volumeInfo.imageLinks && (
          <div className='text-black dark:text-gray-200'>No Thumbnail</div>
        )}
      </div>
      <h5 className='font-bold tracking-tight text-gray-900 dark:text-white'>
        {book.volumeInfo.title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400 mb-2'>
        {book.volumeInfo.authors && book.volumeInfo.authors.length > 0
          ? book.volumeInfo.authors[0]
          : ''}
      </p>
      <div className='inline-flex items-center cursor-pointer mx-auto mt-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Read more
        <svg
          className='w-3.5 h-3.5 ml-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </div>
    </div>
  );
};
