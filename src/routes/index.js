import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import history from 'history';

import Home from '../pages/Home';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;