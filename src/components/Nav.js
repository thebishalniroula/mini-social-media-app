import { Link } from "react-router-dom";
import { useState } from "react";

import "./nav.css";
const Nav = ({ setInput }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
    setInput(e.target.value.toString());
  };
  return (
    <div className="Navbar">
      <Link to="/simple-fetch-users-app" className="logo">
        <h3 className="logo">GithubUsers</h3>
      </Link>
      <div className="search">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
          className="searchicon"
        />
        <input
          type="text"
          className="navsearch"
          placeholder="Search users"
          onChange={changeHandler}
          value={value}
        />
      </div>
    </div>
  );
};

export default Nav;
