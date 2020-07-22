import React from "react";

import downArrow from "../../asset/iconmonstr-arrow-65.svg";

import "./filter-dropdown.styles.scss";

const Dropdown = ({ region, handleChange }) => {
  return (
    <div className="dropdown__container">
      <img src={downArrow} alt="Arrow Icon" className="arrow" />
      <select
        name="region"
        id="region"
        className="dropdown"
        onChange={handleChange}
        value={region}
      >
        <option>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="America">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceanic">Oceanic</option>
      </select>
    </div>
  );
};

export default Dropdown;
