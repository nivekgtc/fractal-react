import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import './config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello Beers</h1>
    </Provider>
  );
}

export default App;
