import React from "react";

import "./flag-box.styles.scss";

const FlagBox = ({ country }) => {
  const { flag, name, population, region, capital } = country;
  return (
    <div className="flag__container">
      <div
        className="flag__img"
        style={{
          backgroundImage: `url(${flag})`,
        }}
      />

      <div className="flag__content">
        <h1 className="name">{name}</h1>
        <ul className="list__items">
          <li className="list__item">
            Population: <span>{population}</span>
          </li>
          <li className="list__item">
            Region: <span>{region}</span>
          </li>
          <li className="list__item">
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlagBox;
