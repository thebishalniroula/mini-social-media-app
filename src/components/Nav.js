import { Link } from "react-router-dom";
import { useRef } from "react";

import "./nav.css";
const Nav = () => {
  const inputRef = useRef(null);
  return (
    <div className="Navbar">
      <Link to="/" className="logo">
        <h3 className="logo">GithubUsers</h3>
      </Link>
      <div className="search">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
          className="searchicon"
        />
        <input
          ref={inputRef}
          type="text"
          className="navsearch"
          placeholder="Search users"
        />
      </div>
    </div>
  );
};

export default Nav;
