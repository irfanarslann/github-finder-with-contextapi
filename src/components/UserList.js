import React, { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
const UserList = () => {
  const { users, } = useContext(GithubContext);

  return (
    <div
      className="userlist-wrapper"
      style={{ maxWidth: "70%", margin: "auto" }}
    >
      {users &&
        users.map((user) => {
          return (
            <div
              className="card m-5 p-2 rounded shadow"
              key={user.id}
              style={{ maxWidth: "450px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={user.avatar_url}
                    alt="..."
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <button className="btn btn-primary">
                      <a href={`/userdetail/${user.id}`} className="text-white">
                        Details
                      </a>
                    </button>
                    <p className="card-text">
                      <small className="text-muted">
                        <a href={user.html_url} style={{ color: "black" }}>
                          {" "}
                          See On Github <i className="fab fa-github"></i>
                        </a>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
