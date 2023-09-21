import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchBox = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (v: string) => void;
}) => {
  return (
    <div className='relative w-full sm:w-[36rem]'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <MagnifyingGlassIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
      </div>
      <input
        type='search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='block w-full p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Search Books...'
      />
    </div>
  );
};
