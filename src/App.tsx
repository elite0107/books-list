import React, { Suspense, lazy, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import ColorModeProvider from 'contexts/colorModeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from 'components/layout/container';

const HomePage = lazy(() => import('./pages/home'));
const BookPage = lazy(() => import('./pages/books/bookPage'));

const Loading = lazy(() => import('./pages/loading/loading'));

function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <Container>
          <BrowserRouter basename='/books-list'>
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
    </QueryClientProvider>
  );
}

export default App;
