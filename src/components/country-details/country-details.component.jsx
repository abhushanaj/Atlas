import React from "react";

import BorderLink from "../border-link/border-link.component";

import "./country-details.styles.scss";

const CountryDetails = ({ details }) => {
  const {
    name,
    region,
    subregion,
    flag,
    nativeName,
    population,
    capital,
    borders,
    currencies,
    topLevelDomain,
    languages,
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
              Native Name: <span>{nativeName}</span>
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
              Top Level Domain:
              {topLevelDomain &&
                topLevelDomain.map((domain, ind) => {
                  if (ind === topLevelDomain.length - 1) {
                    return <span key={ind}>{domain}</span>;
                  }
                  return <span key={ind}>{domain},</span>;
                })}
            </li>

            <li className="stat">
              Currencies:
              {currencies &&
                currencies.map(({ name }, ind) => {
                  if (ind === currencies.length - 1) {
                    return <span key={ind}>{name}</span>;
                  }
                  return <span key={ind}>{name},</span>;
                })}
            </li>

            <li className="stat">
              Languagues:
              {languages &&
                languages.map(({ name }, ind) => {
                  if (ind === languages.length - 1) {
                    return <span key={ind}>{name}</span>;
                  }
                  return <span key={ind}>{name},</span>;
                })}
            </li>
          </ul>
        </div>

        <div className="border__details">
          <p>Border:</p>
          <div>
            {borders &&
              borders.map((border, index) => (
                <BorderLink key={index} code={border} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
