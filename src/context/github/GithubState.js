import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import { useReducer } from "react";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  GET_USER,
  SET_LOADING,
} from "../types";
import axios from "axios";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users
  const searchUsers = async (searchKey) => {
    setLoading();
    const userData = await axios.get(
      "https://api.github.com/search/users?q=" + encodeURI(searchKey)
    );

    dispatch({ type: GET_USERS, users: userData.data.items });
  };
  //Get User
  const getUser = async (id) => {
    setLoading();
    const userData = await axios.get(
      "https://api.github.com/user/" + encodeURI(id)
    );

    dispatch({ type: GET_USER, user: userData.data });
  };
  //Get user's Repos

  const getRepos = async (username) => {
    setLoading();
    const repo = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );

    dispatch({ type: GET_REPOS, repos: repo.data });
  };
  //Set loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        getUser,
        clearUsers,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
