import React from "react";
// import { EmailField } from "./EmailField";
import { formDataToObject } from "../../utils/formDataToObject";
import "./AsyncEmailValidation.css";

class AsyncEmailValidation extends React.Component {
  state = {};
  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      return;
    }

    const data = new FormData(form);
    this.setState({ result: formDataToObject(data) });
  };

  render() {
    const { result } = this.state;
    return (
      <form
        className="AsyncEmail"
        onSubmit={this.handleSubmit}
      >
        <p>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="enter username"
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="enter email"
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

export { AsyncEmailValidation };
