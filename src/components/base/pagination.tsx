import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface PaginationProps {
  startIndex: number;
  count: number;
  totalNumber: number;
  onPaginate?: (st: number) => void;
}

export const Pagination = ({ startIndex, count, totalNumber, onPaginate }: PaginationProps) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-sm text-gray-700 dark:text-gray-400' data-testid='pagination-numbers'>
        {!!totalNumber && (
          <>
            Showing{' '}
            <span className='font-semibold text-gray-900 dark:text-white'>{startIndex + 1}</span> to{' '}
            <span className='font-semibold text-gray-900 dark:text-white'>
              {Math.min(startIndex + count, totalNumber)}
            </span>{' '}
            of <span className='font-semibold text-gray-900 dark:text-white'>{totalNumber}</span>{' '}
            Books
          </>
        )}
        {!totalNumber && <>Loading ...</>}
      </span>
      <div className='inline-flex mt-2 xs:mt-0'>
        <button
          disabled={startIndex == 0}
          className='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-700 rounded-l hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50'
          onClick={() => onPaginate && onPaginate(startIndex - count)}
          data-testid='prev'
        >
          <ArrowLeftIcon className='w-3.5 h-3.5 mr-2' />
          Prev
        </button>
        <button
          disabled={startIndex + count >= totalNumber}
          className='flex items-center justify-center px-4 h-10 text-base border-l border-blue-300 font-medium text-white bg-blue-700 rounded-r hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50'
          onClick={() => onPaginate && onPaginate(startIndex + count)}
          data-testid='next'
        >
          Next
          <ArrowRightIcon className='w-3.5 h-3.5 ml-2' />
        </button>
      </div>
    </div>
  );
};
