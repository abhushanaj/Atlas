import React from "react";

import "./country-details.styles.scss";

const CountryDetails = ({ details }) => {
  const {
    name,
    region,
    subregion,
    flag,
    nativename,
    population,
    capital,
  } = details;

  return (
    <div className="country__container">
      <div className="country__flag">
        <img src={flag} alt="Flag" />
      </div>

      <div className="country__details">
        <h1 className="country__name">{name}</h1>

        <div className="country__stats">
          <ul className="stats__left">
            <li className="stat">
              Native Name: <span>{nativename}</span>
            </li>
            <li className="stat">
              Population: <span>{population}</span>
            </li>
            <li className="stat">
              Region: <span>{region}</span>
            </li>
            <li className="stat">
              Sub Region: <span>{subregion}</span>
            </li>
            <li className="stat">
              Capital: <span>{capital}</span>
            </li>
          </ul>

          <ul className="stats__left">
            <li className="stat">
              Top Level Domain: <span>Belgie</span>
            </li>
            <li className="stat">
              Currencies: <span>Belgie</span>
            </li>
            <li className="stat">
              Languagues: <span>Belgie</span>
            </li>
          </ul>
        </div>

        <div className="border__details">
          <p>Border</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
