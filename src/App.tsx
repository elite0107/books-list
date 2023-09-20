import React, { Suspense, lazy } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ColorModeProvider from 'contexts/colorModeProvider';

const HomePage = lazy(() => import('./pages/home'));
const BooksPage = lazy(() => import('./pages/books/books'));

const Loading = lazy(() => import('./pages/loading/loading'));
const PageError = lazy(() => import('./pages/error/500'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={PageError} onReset={() => window.location.replace('/')}>
      <ColorModeProvider>
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
                    <BooksPage />
                  </Suspense>
                }
              />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Provider>
        </BrowserRouter>
      </ColorModeProvider>
    </ErrorBoundary>
  );
}

export default App;
