import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you trying to reach does not exists</p>
      <button className="btn btn-primary" onClick={() => history.push("/")}>
        Click to back
      </button>
    </div>
  );
};
export default NotFound;
