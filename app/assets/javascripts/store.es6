import * as reducers from './reducers.es6';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
