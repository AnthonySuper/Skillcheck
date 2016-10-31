import * as reducers from './reducers.es6';
import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({...reducers,
  routing: routerReducer});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
