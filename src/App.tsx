import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <h1 className='flex items-center justify-center w-screen h-screen text-3xl font-bold underline text-red-600'>
            Simple React Typescript Tailwind Sample
          </h1>
        </header>
      </div>
    </Provider>
  );
}

export default App;
