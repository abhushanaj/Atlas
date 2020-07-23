import React from "react";

import FlagBox from "../flag-box/flag-box.component";

import "./flag-lists.styles.scss";

const FlagLists = ({ countriesList }) => {
  return (
    <div className="flag__lists u-container">
      {countriesList.map((country) => {
        return <FlagBox key={country.alpha2Code} country={country} />;
      })}
    </div>
  );
};

export default FlagLists;
