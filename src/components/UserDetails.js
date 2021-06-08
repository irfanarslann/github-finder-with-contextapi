import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

const UserDetails = () => {
  const { id } = useParams();
  const { getUser, user, getRepos, repos } = useContext(GithubContext);

  useEffect(() => {
    getUser(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-detail" onLoad={() => getRepos(user.login)}>
      <button className="btn btn-primary">
        <Link to="/"> Back to Search</Link>
      </button>
      <div className="sections">
        <div className="left ">
          <img src={user.avatar_url} alt="user-pic" />
          <div className="badges">
            <span className="badge bg-primary">
              Followers :{user.followers}
            </span>
            <span
              className={user.hireable ? "badge bg-success" : "badge bg-danger"}
            >
              Hireable :{user.hireable ? <span>Yes</span> : <span>No</span>}
            </span>
            <span className="badge bg-info text-dark">
              Public Repos : {user.public_repos}
            </span>
          </div>
          <a href={user.html_url} className="text-primary mt-2" target="blank">
            Check Out GitHub Profile
          </a>
        </div>

        <div className="right shadow">
          <h1>{user.name ? user.name : "Name Not Found"}</h1>
          <h5>{user.login ? user.login : "Username info not found"}</h5>
          <small className="text-muted">
            {user.company ? user.company : "Company info not found"} ||
            {user.location ? user.location : "Location info not found"}
          </small>
          <p>{user.bio ? user.bio : "Bio info not found"}</p>
          <p>
            {user.blog && (
              <button className="btn btn-primary">
                <a href={user.blog}> Visit Blog</a>
              </button>
            )}
          </p>
        </div>
      </div>
      <div className="my-5 mx-5">
        <h2 className="text-primary">Repositories of {user.name}</h2>
        <div className="list-group">
          {repos.map((repo) => {
            return (
              <a
                href={repo.html_url}
                className="list-group-item list-group-item-action p-3"
              >
                {repo.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
