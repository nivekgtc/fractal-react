import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Beer from '../pages/Beer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/beer" component={Beer} />
  </Switch>
);

export default Routes;
