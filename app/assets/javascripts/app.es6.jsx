import store from './store.es6';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router, IndexRoute, Link } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.es6.jsx';
import User from './components/user.es6.jsx';

$(() => 
  ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="users">
          <Route path=":id" component={User} />
        </Route>
      </Route>
    </Router>
  </Provider>, window.document.body)
);
