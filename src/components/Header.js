import React from "react";
import Nav from "./Nav";

const Header = () => {
  const title = "ADAM WILDER AERIAL PHOTOGRAPHY";

  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
