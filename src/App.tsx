import React, { Suspense, lazy, useState } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ColorModeProvider from 'contexts/colorModeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from 'components/layout/container';

const HomePage = lazy(() => import('./pages/home'));
const BookPage = lazy(() => import('./pages/books/bookPage'));

const Loading = lazy(() => import('./pages/loading/loading'));
const PageError = lazy(() => import('./pages/error/500'));

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={PageError} onReset={() => window.location.replace('/')}>
        <ColorModeProvider>
          <Container>
            <BrowserRouter>
              <Provider store={store}>
                <Routes>
                  <Route
                    path='/'
                    element={
                      <Suspense fallback={<Loading />}>
                        <HomePage />
                      </Suspense>
                    }
                  />
                  <Route
                    path='/books/:book_id'
                    element={
                      <Suspense fallback={<Loading />}>
                        <BookPage />
                      </Suspense>
                    }
                  />
                  <Route path='*' element={<Navigate to='/' />} />
                </Routes>
              </Provider>
            </BrowserRouter>
          </Container>
        </ColorModeProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
