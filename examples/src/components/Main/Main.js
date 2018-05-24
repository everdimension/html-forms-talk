import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import './Main.css';

const propTypes = {};

function Main({ children }) {
  return (
    <React.Fragment>
      <nav>
        <a href="#/">Main</a>
        <a href="#/repeat-password">RepeatPassword</a>
      </nav>
      <div className="Main">
        {children}
      </div>
    </React.Fragment>
  );
}

Main.propTypes = propTypes;

export { Main };
