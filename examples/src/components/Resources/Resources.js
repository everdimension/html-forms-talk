import React from "react";
import PropTypes from "prop-types";

const resources = [
  {
    name: "Demo code",
    url:
      "https://github.com/everdimension/html-forms-talk/tree/master/examples",
  },
  {
    name: "Вёрстка канвасом",
    url:
      "https://www.moscowjs.ru/talk/canvas",
  },
  {
    name: "Constrain validation",
    url:
      "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation",
  },
  {
    name: "AOM",
    url:
      "http://wicg.github.io/aom/",
  },
];
const propTypes = {};

function Resources() {
  return (
    <React.Fragment>
      {resources.map(resource => (
        <p key={resource.url}>
          {resource.name}
          <br />
          <a href={resource.url}>{resource.url}</a>
        </p>
      ))}
    </React.Fragment>
  );
}

Resources.propTypes = propTypes;

export { Resources };
