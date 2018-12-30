import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Example from './routes';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Example} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
