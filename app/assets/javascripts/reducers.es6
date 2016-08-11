import * as types from './action_types.es6';
import { cloneRemovingKey } from './utils.es6';

export function skills(state = {}, action) {
  if(action.type === types.ADD_SKILLS) {
    return {...state, ...action.skills};
  }
  if(action.type === types.REMOVE_SKILL) {
    return cloneRemovingKey(state, action.id);
  }
  return state;
}

export function users(state = {}, action) {
  if(action.type === types.ADD_USERS) {
    return {...state, ...action.users};
  }
  if(action.type === types.REMOVE_USER) {
    return cloneRemovingKey(state, action.id);
  }
  return state;
}

export function userSkills(state = {}, action) {
  if(action.type === types.ADD_USER_SKILLS) {
    return {...state, ...action.userSkills};
  }
  return state;
}

export function currentUser(state = null, action) {
  if(action.type === types.SIGN_IN) {
    return action.user;
  }
  if(action.type === types.SIGN_OUT) {
    return null;
  }
  return state;
}
