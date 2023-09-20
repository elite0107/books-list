import { PropsWithChildren } from 'react';
import { Loading } from '../base/loading';
import { PageError } from '../base/pageError';
import { Header } from './header';

export const Layout: React.FC<PropsWithChildren & { loading: boolean; error: boolean }> = ({
  children,
  loading,
  error,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <PageError />;
  }

  return (
    <div className='flex flex-col bg-white dark:bg-gray-900 min-h-screen'>
      <Header />
      {children}
    </div>
  );
};
