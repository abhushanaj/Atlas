import React from "react";

import logoUrl from "../../asset/earth.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="u-container">
        <div className="logo-box">
          <img src={logoUrl} alt="Logo" />
        </div>
        <h1 className="main-heading"> Atlas </h1>
      </div>
    </div>
  );
};

export default Header;
