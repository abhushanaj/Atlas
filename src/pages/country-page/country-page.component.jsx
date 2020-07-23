import React, { useEffect, useState } from "react";

import BackButton from "../../components/back-button/back-button.component";
import CountryDetails from "../../components/country-details/country-details.component";

import "./country-page.styles.scss";

const CountryPage = ({ match }) => {
  const [countryDetails, setCountryDetails] = useState([]);

  const { countryCode } = match.params;

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setCountryDetails(data));
  }, [countryCode]);

  return (
    <div className="u-container">
      <BackButton />
      <CountryDetails details={countryDetails} />
    </div>
  );
};

export default CountryPage;
