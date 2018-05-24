import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import "./Main.css";

const propTypes = {};

function Main({ children }) {
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div>
          <nav>
            <a href="#/">Main</a>
            <a href="#/repeat-password">RepeatPassword</a>
            <a href="#/async-email-validation">AsyncEmail</a>
          </nav>
        </div>
      </div>
      <div className="Main">{children}</div>
    </React.Fragment>
  );
}

Main.propTypes = propTypes;

export { Main };
