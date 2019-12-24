import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import './config/ReactotronConfig';

import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <ConnectedRouter history={history}>
        <Routes />
        <GlobalStyle />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
