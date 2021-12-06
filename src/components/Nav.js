import React, { useRef } from "react";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";
import { Link } from "react-router-dom";

const Nav = () => {
  const dropdownRef = useRef(null);
  const [listOpen, setListOpen] = useDetectOutsideClick(dropdownRef, false);

  const pages = ["Home", "Media", "Contact"];
  const mediaSubPages = ["Photos", "Videos"];

  const handleClick = () => setListOpen(!listOpen);

  const mappedPages = pages.map((page, id) => {
    if (page === "Media") {
      return (
        <div className="dropdown-container">
          <li
            className={`drop-button ${listOpen ? "open" : "closed"}`}
            onClick={handleClick}
          >
            {page}
          </li>
          <nav
            ref={dropdownRef}
            className={`dropdown-content ${listOpen ? "open" : "closed"}`}
          >
            <ul className="dropdown-ul">
              {mediaSubPages.map((subPage, subPageId) => {
                return (
                  <Link to={`/${subPage}`} key={subPageId}>
                    <li
                      className="dropdown-list-item"
                      key={subPageId}
                      onClick={handleClick}
                    >
                      {subPage}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
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
