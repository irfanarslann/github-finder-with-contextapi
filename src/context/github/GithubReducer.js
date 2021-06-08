import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  GET_USER,
  SET_LOADING,
} from "../types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users, loading: false };
    case GET_USER:
      return { ...state, user: action.user, loading: false };
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos,
        loading: false,
      };
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return { ...state, users: [] };

    default:
      break;
  }
};

export default GithubReducer;
