import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const pages = [
  {
    name: "Home",
    className: "home",
  },
  {
    name: "Photos",
    className: "camera",
  },
  {
    name: "Videos",
    className: "video camera",
  },
  {
    name: "Contact",
    className: "envelope open",
  },
];

const mappedPages = pages.map((page, id) => {
  return (
    <Link to={`/${page.name}`} key={id}>
      <li>
        <Icon name={page.className} size="big" color="black" />
      </li>
    </Link>
  );
});

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">Adam Wilder Aerial Photography</h1>
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
