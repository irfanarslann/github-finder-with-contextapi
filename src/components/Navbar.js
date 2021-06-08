import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        Github Finder <i className="fab fa-github"></i>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
