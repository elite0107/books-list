import { PropsWithChildren } from 'react';
import { Header } from './header';

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col bg-white dark:bg-gray-900 min-h-screen'>
      <Header />
      {children}
    </div>
  );
};
