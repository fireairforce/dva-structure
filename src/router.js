import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import Login from './components/Login';
import NotFound from './routes/404';
import Home from './components/Home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path='/home' component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
