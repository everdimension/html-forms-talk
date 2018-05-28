import React from "react";
// import escapeRegex from "escape-string-regexp";
import { formDataToObject } from "../../utils/formDataToObject";
import "./RepeatPassword.css";

class RepeatPassword extends React.Component {
  constructor() {
    super();
    this.state = { values: {} };
  }

  handleChange = event => {
    const input = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [input.name]: input.value,
      },
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    this.setState({
      result: formDataToObject(new FormData(form)),
    });
  };

  render() {
    const { values, result } = this.state;
    return (
      <form
        className="repeatPassword"
        onSubmit={this.handleSubmit}
      >
        <p>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="text"
            placeholder="enter password"
            required
          />
        </p>
        <p>
          <label htmlFor="repeatPassword">
            Repeat Password
          </label>
          <input
            name="repeatPassword"
            id="repeatPassword"
            type="text"
            placeholder="repeat password"
            required
          />
        </p>
        <p>
          <button>submit</button>
        </p>
        {result ? (
          <pre>
            {JSON.stringify(this.state.result, null, 2)}
          </pre>
        ) : null}
      </form>
    );
  }
}

export { RepeatPassword };
