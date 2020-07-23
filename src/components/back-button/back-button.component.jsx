import React from "react";
import { withRouter } from "react-router-dom";

import backbutton from "../../asset/iconmonstr-arrow-20.svg";

import "./back-button.styles.scss";

const BackButton = ({ history }) => {
  return (
    <button
      className="back-button"
      onClick={() => {
        history.push("/");
      }}
    >
      <img src={backbutton} alt="Arrow Icon" />
      Back
    </button>
  );
};

export default withRouter(BackButton);
