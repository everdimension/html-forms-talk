import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'universal-router';
import { Main } from './components/Main';
import { routes } from './routes';

const router = new Router(routes);

const root = document.getElementById('root');

function render(component) {
  ReactDOM.render(<Main>{component}</Main>, root);
}

function getHash() {
  return location.hash || '#/';
}

export function renderApp() {
  router
    .resolve({
      pathname: getHash().slice(1),
      render,
    })
    .catch(e => {
      console.log('errrr', e);
      return 'something';
    });
  window.addEventListener('hashchange', () => {
    router.resolve({
      pathname: getHash().slice(1),
      render,
    });
  });
}
