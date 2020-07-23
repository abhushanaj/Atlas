import React from "react";

import { withRouter } from "react-router-dom";

import "./border-link.styles.scss";

const BorderLink = ({ code, history }) => {
  return (
    <p
      className="border"
      onClick={() => history.push(`/country/${code.toLowerCase()}`)}
    >
      {code}
    </p>
  );
};

export default withRouter(BorderLink);
