import React, { useContext, useState } from "react";

import GithubContext from "../context/github/GithubContext";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  const { searchUsers, users, clearUsers } = useContext(GithubContext);

  const searchHandle = (e) => {
    e.preventDefault();
    searchUsers(searchKey);
  };
  const clearHandler = () => {
    clearUsers();
  };

  return (
    <div className="input-group rounded d-flex justify-content-center mt-4">
      <form
        className="form-inline my-2 my-lg-0 d-flex flex-row"
        onSubmit={(e) => searchHandle(e)}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className="btn btn-outline-danger mx-2">Search</button>
      </form>

      {users.length > 1 && (
        <button className="btn btn-sm btn-info ml-5" onClick={clearHandler}>
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
