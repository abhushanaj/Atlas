import React from "react";

import Searchbox from "../../components/searchbox/searchbox.component";
import Dropdown from "../../components/filter-dropdown/filter-dropdown.component";
import FlagLists from "../../components/flag-lists/flag-lists.component";

import "./homepage.styles.scss";

const fetchCountriesByRegion = async (regionName) => {
  let data, urlToFetch;
  try {
    urlToFetch =
      regionName === ""
        ? "https://restcountries.eu/rest/v2/all"
        : `https://restcountries.eu/rest/v2/region/${regionName}`;

    const response = await fetch(urlToFetch);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      region: "",
      countriesList: [],
    };
  }

  handleChange = async (event) => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
      },
      async () => {
        const { region } = this.state;

        if (name === "region") {
          try {
            const result = await fetchCountriesByRegion(region.toLowerCase());
            this.setState({
              countriesList: result,
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    );
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = (await response.json()) || [];
      this.setState({
        countriesList: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { country, region, countriesList } = this.state;

    const countriesToRender = countriesList.filter(({ name }) => {
      return name.toLowerCase().includes(country.toLowerCase());
    });

    return (
      <>
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
