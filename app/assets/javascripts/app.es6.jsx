import store from './store.es6';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router, IndexRoute, Link } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.es6.jsx';
import User from './components/user/routes.es6.jsx';
import Skill from './components/skill/routes.es6.jsx'
import Project from './components/project/routes.es6.jsx';

const history = syncHistoryWithStore(hashHistory, store);

$(() => 
  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {User}
        {Skill}
        {Project}
      </Route>
    </Router>
  </Provider>, window.document.body)
);
