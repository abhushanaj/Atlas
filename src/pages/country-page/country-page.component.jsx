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

  async fetchData() {
    const { countryCode } = this.props.match.params;

    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          countryDetails: data,
        })
      );
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { countryDetails } = this.state;
    return (
      <div className="u-container">
        <BackButton />
        <CountryDetails details={countryDetails} />
      </div>
    );
  }
}

export default CountryPage;
