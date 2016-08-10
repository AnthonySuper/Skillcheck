import * as types from './action_types.es6';
import { apiResponseToObject } from './utils.es6';

export function signOut() {
  return {
    type: types.SIGN_OUT
  };
}

export function signIn(user) {
  return {
    type: types.SIGN_IN,
    user: user
  };
}

export function addUsers(users) {
  return {
    type: types.ADD_USERS,
    users: users
  };
}

export function validateToken() {
  console.log("Dispatching validate token");
  return async function(dispatch, getState) {
    try {
      let user = await window.Auth.validateToken();
      dispatch(signIn(user));
    }
    catch(err) {
      console.warn("Could not validate token");
      dispatch(signOut());
    }
  }
}

export function fetchUser(id) {
  return async function(dispatch, getState) {
    try {
      let data = await $.getJSON(`/api/v1/users/${id}`);
      dispatch(addUsers(apiResponseToObject(data)));
    }
    catch(err) {
      console.warn(`Could not fetch user ${id}`, err);
    }
  }
}
