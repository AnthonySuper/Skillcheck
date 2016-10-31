import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './index.es6.jsx';
import New from './new.es6.jsx';

const Routes = <Route path="projects">
  <IndexRoute component={Index} />
  <Route path="new" component={New} />
</Route>;

export default Routes;
