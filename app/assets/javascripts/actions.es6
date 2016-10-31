import * as types from './action_types.es6';
import { apiResponseToObject, 
  putJSON, 
  postJSON,
  includedToObject } from './utils.es6';
import { hashHistory } from 'react-router';

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

export function addProjects(projects) {
  return {
    type: types.ADD_PROJECTS,
    projects: projects
  };
}

export function addUserSkills(userSkills) {
  return {
    type: types.ADD_USER_SKILLS,
    userSkills: userSkills
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
      let included = data.included;
      dispatch(addSkills(includedToObject(included, "skills")));
      dispatch(addUserSkills(includedToObject(included, "userSkills")));
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
      let d = await $.getJSON(`/api/v1/skills/${id}?include=users,user_skills`);
      let inc = d.included;
      dispatch(addUsers(includedToObject(inc, "users")));
      dispatch(addUserSkills(includedToObject(inc, "userSkills")));
      dispatch(addSkills(apiResponseToObject(d)));
    }
    catch(err) {
      console.warn(`could not fetch skill ${id}`,err);
    }
  }
}

export function updateUserSkill(id, attrs) {
  return async function(dispatch, getState) {
    try {
      let d = await putJSON(`/api/v1/user_skills/${id}`,
        {user_skill: attrs});
      dispatch(addUserSkills(apiResponseToObject(d)));
    }
    catch(err) {
      console.warn("Could not update uer skill", err);
    }
  }
}

export function fetchProjects() {
  return async function(dispatch, getState) {
    try {
      let d = await $.getJSON(`/api/v1/projects/`);
      dispatch(addProjects(apiResponseToObject(d)));
    }
    catch(err) {
      console.warn("Could not update projects", err);
    }
  };
}

export function createProject(proj) {
  return async function(dispatch, getState) {
    try {
      let d = await postJSON("/projects", {project: proj});
      dispatch(addProjects(apiResponseToObjet(d)));
      console.log("Added project", d);
    }
    catch(err) {
      console.warn("Could not create project", err);
    }
  };
}
