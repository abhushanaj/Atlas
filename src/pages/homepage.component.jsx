import React from "react";

import Searchbox from "../components/searchbox/searchbox.component";
import Dropdown from "../components/filter-dropdown/filter-dropdown.component";
import Header from "../components/header/header.component";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      region: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { country, region } = this.state;

    return (
      <>
        <Header />
        <div className="u-container search__group">
          <Searchbox country={country} handleChange={this.handleChange} />
          <Dropdown region={region} handleChange={this.handleChange} />
        </div>
      </>
    );
  }
}

export default HomePage;
