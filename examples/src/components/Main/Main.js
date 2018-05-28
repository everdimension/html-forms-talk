import React from "react";
import "normalize.css";
import "./Main.css";

const propTypes = {};

function Main({ children }) {
  const isExamplePage = window.location.hash.includes('/example/');
  const isSolutionPage = window.location.hash.endsWith(
    "/solution",
  );
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <div>
          <nav>
            <a href="#/">Main</a>
            <a href="#/example/repeat-password">RepeatPassword</a>
            <a href="#/example/async-email-validation">
              AsyncEmail
            </a>
          </nav>
        </div>
      </div>
      <div className="Main">
        {children}
      </div>
      {(isExamplePage && !isSolutionPage) ? (
        <footer className="footer">
          <a className="SolutionLink" href={`${window.location.hash}/solution`}>
            Solution
          </a>
        </footer>
      ) : null}
    </React.Fragment>
  );
}

Main.propTypes = propTypes;

export { Main };
