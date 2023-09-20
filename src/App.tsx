import React, { Suspense } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/home'));
const BooksPage = React.lazy(() => import('./pages/books/books'));

const Loading = React.lazy(() => import('./pages/loading/loading'));
const PageError = React.lazy(() => import('./pages/error/500'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={PageError} onReset={() => window.location.replace('/')}>
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
    </ErrorBoundary>
  );
}

export default App;
