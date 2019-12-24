import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import './config/ReactotronConfig';

import history from './services/history';
import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello Beers</h1>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
