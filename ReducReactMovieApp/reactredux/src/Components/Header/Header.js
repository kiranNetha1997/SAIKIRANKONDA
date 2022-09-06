import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;