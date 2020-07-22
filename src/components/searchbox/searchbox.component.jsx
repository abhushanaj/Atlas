import React from "react";

import searchicon from "../../asset/iconmonstr-search-thin.svg";
import "./searchbox.styles.scss";

const Searchbox = ({ country, handleChange }) => {
  return (
    <div className="input__container">
      <img src={searchicon} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        name="country"
        id="country"
        placeholder="Search for a country..."
        value={country}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbox;
