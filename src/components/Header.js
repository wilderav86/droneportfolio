import React from "react";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const title = "ADAM WILDER AERIAL PHOTOGRAPHY";

  return (
    <div className="header-container">
      <div className="title-container">
        <h1 className="title">{title}</h1>
      </div>
      <SocialMedia />
      <Nav />
    </div>
  );
};

export default Header;
