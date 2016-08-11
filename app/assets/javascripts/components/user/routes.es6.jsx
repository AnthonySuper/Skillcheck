import { Route, IndexRoute } from 'react-router'
import Show from './show.es6.jsx';
import React from 'react';

const Routes = <Route path="users">
  <Route path=":id" component={Show} />
</Route>;

export default Routes;
