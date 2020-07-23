import React from "react";

import Searchbox from "../components/searchbox/searchbox.component";
import Dropdown from "../components/filter-dropdown/filter-dropdown.component";
import Header from "../components/header/header.component";
import FlagLists from "../components/flag-lists/flag-lists.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      region: "",
      countriesList: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.setState({
      countriesList: data,
    });
  }

  render() {
    const { country, region, countriesList } = this.state;

    const countriesToRender = countriesList.filter(({ name }) => {
      return name.toLowerCase().includes(country.toLocaleLowerCase());
    });

    return (
      <>
        <Header />
        <div className="u-container search__group">
          <Searchbox country={country} handleChange={this.handleChange} />
          <Dropdown region={region} handleChange={this.handleChange} />
        </div>
        <FlagLists countriesList={countriesToRender} />
      </>
    );
  }
}

export default HomePage;
