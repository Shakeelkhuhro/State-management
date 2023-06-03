import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter.js';
import store from './components/ReduxStore.js';
import { useMemo } from 'react';

function App() {
  const memoizedStore = useMemo(() => store, []);
  
  return (
    <>
      <Provider store={memoizedStore}>
        <Counter />
      </Provider>
    </>
  );
}


export default App;
