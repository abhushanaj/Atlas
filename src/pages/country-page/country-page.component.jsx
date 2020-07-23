import React from "react";

import BackButton from "../../components/back-button/back-button.component";
import CountryDetails from "../../components/country-details/country-details.component";

import "./country-page.styles.scss";

class CountryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryDetails: [],
    };
  }

  async componentDidMount() {
    const { countryName } = this.props.match.params;

    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    );
    const data = await response.json();

    this.setState({
      countryDetails: data[0],
    });
  }

  render() {
    const { countryDetails } = this.state;
    console.log(countryDetails);
    return (
      <div className="u-container">
        <BackButton />
        <CountryDetails details={countryDetails} />
      </div>
    );
  }
}

export default CountryPage;
