import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/homepage.component";
import CountryPage from "./pages/country-page/country-page.component";

import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/country/:countryName" component={CountryPage} />
      </Switch>
    </div>
  );
}

export default App;
