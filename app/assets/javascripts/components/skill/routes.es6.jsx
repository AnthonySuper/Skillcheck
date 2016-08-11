import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './index.es6.jsx';
import Create from './create.es6.jsx';
import Show from './show.es6.jsx'
import Edit from './edit.es6.jsx'

const Routes = <Route path="skills">
  <IndexRoute component={Index} />
  <Route path="create" component={Create} />
  <Route path=":id" component={Show} />
  <Route path=":id/edit" component={Edit} />
</Route>;

export default Routes;
