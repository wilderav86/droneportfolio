import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const pages = ["Home", "Media", "Contact"];
  const mediaSubPages = ["Photos", "Videos"];

  const mappedPages = pages.map((page, id) => {
    if (page === "Media") {
      return (
        <div className="dropdown">
          <li className="drop-button">
            {page}
            <div className="dropdown-content">
              {mediaSubPages.map((subPage, id) => {
                return (
                  <Link to={`/${subPage}`} key={id}>
                    <li className="nav-list-items" key={id}>
                      {subPage}
                    </li>
                  </Link>
                );
              })}
            </div>
          </li>
        </div>
      );
    }
    return (
      <Link to={`/${page}`} key={id}>
        <li className="nav-list-items" key={id}>
          {page}
        </li>
      </Link>
    );
  });

  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-items">{mappedPages}</ul>
      </nav>
    </div>
  );
};

export default Nav;
