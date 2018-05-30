import React from "react";
import ReactDOM from "react-dom";
import Router from "universal-router";
import { routes } from "./routes";

const router = new Router(routes);

const root = document.getElementById("root");

function render(component) {
  ReactDOM.render(component, root);
}

function getHash() {
  return window.location.hash || "#/";
}

function matchRoute() {
  router
    .resolve({
      pathname: getHash().slice(1),
    })
    .then(layout => {
      render(layout);
    })
    .catch(() => {
      render(<h2 style={{ padding: "1em" }}>404</h2>);
    });
}

export function renderApp() {
  matchRoute();
  window.addEventListener("hashchange", matchRoute);
}
