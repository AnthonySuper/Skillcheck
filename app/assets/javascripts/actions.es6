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

export function addSkills(skills) {
  return {
    type: types.ADD_SKILLS,
    skills: skills
  };
}

export function validateToken() {
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

export function fetchSkills() {
  return async function(dispatch, getState) {
    try {
      let data = await $.getJSON(`api/v1/skills`);
      dispatch(addSkills(apiResponseToObject(data)));
    }
    catch(err) {
      console.warn("Could not fetch skills");
    }
  }
}

export function fetchSkill(id) {
  return async function(dispatch, getState) {
    try {
      let d = await $.getJSON(`/api/v1/skills/${id}`);
      dispatch(addSkills(apiResponseToObject(d)));
    }
    catch(err) {
      console.warn(`could not fetch skill ${id}`,err);
    }
  }
}
