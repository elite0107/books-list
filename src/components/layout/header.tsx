import { ThemeSwitch } from '../base/themeSwitch';

export const Header = () => {
  return (
    <div className='flex items-center justify-center relative p-6 gap-4 border-solid border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700'>
      <div className='text-xl font-bold text-gray-600 dark:text-white'>Google API Book List</div>
      <div className='absolute right-8'>
        <ThemeSwitch />
      </div>
    </div>
  );
};
