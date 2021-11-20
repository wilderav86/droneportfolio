import React from "react";
import { Link } from "react-router-dom";

const pages = ["Home", "Photos", "Videos"];

const mappedPages = pages.map((page, id) => {
  return (
    <Link to={`/${page}`} className="navitem">
      <li className={`nav-item-${id}`}>{page}</li>
    </Link>
  );
});

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1>Adam Wilder Aerial Photography</h1>
      </div>
      <div className="nav-container">
        <nav>
          <ul className="nav-items">{mappedPages}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
