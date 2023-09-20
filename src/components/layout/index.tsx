import { PropsWithChildren } from 'react';
import { Loading } from '../base/loading';
import { PageError } from '../base/pageError';

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

  return <div className='max-w-7xl'>{children}</div>;
};
