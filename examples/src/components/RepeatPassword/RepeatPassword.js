import React from "react";
import PropTypes from "prop-types";
import { formDataToObject } from "../../utils/formDataToObject";
import "./RepeatPassword.css";

const propTypes = {};

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
        [input.name]: input.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    this.setState({ submitAttempted: true });
  };

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    this.setState({
      result: formDataToObject(new FormData(form))
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="text"
            onChange={this.handleChange}
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
            pattern={this.state.values.password}
            required
          />
        </p>
        <p>
          <button>submit</button>
        </p>
      </form>
    );
  }
}

RepeatPassword.propTypes = propTypes;

export { RepeatPassword };

// class RepeatPassword extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//
//   handleChange = event => {
//     const input = event.target;
//     this.setState({ [input.name]: input.value });
//   };
//
//   handleSubmit = event => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     this.setState({
//       result: formDataToObject(formData),
//     });
//   };
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <p>
//           <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="text"
//             onChange={this.handleChange}
//             placeholder="enter password"
//             required
//           />
//         </p>
//         <p>
//           <label htmlFor="repeatPassword">Repeat Password</label>
//           <input
//             id="repeatPassword"
//             name="repeatPassword"
//             type="text"
//             pattern={this.state.password}
//             placeholder="repeat password"
//             required
//           />
//         </p>
//
//         <p>
//           <button>submit...</button>
//         </p>
//         {this.state.result ? (
//           <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
//         ) : null}
//       </form>
//     );
//   }
// }
//
// RepeatPassword.propTypes = propTypes;
//
// export { RepeatPassword };
