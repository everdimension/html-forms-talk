import React from "react";
import debounce from "lodash/debounce";
import { Spinner } from "../Spinner";

function checkEmail(value) {
  return new Promise((resolve, reject) => {
    setTimeout(
      value === "moscow@js.com" ? resolve : reject,
      1500,
    );
  });
}

class EmailField extends React.Component {
  state = {
    checking: false,
  };

  handleConfirm = debounce((value, checkTime) => {
    this.setState({ checking: checkTime });
    checkEmail(value).then(
      () => {
        if (this.state.checking === checkTime) {
          this.setState({ checking: false });
        }
        if (this.node.value === value) {
          this.node.setCustomValidity("");
        }
      },
      () => {
        if (this.state.checking === checkTime) {
          this.setState({ checking: false });
        }
        if (this.node.value === value) {
          this.node.setCustomValidity("alreadyTaken");
        }
      },
    );
  }, 500);

  handleChange = event => {
    const input = event.target;
    input.setCustomValidity("");
    if (input.validity.valid) {
      input.setCustomValidity("checking...");
      this.handleConfirm(input.value, Date.now());
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          {...this.props}
          ref={n => {
            this.node = n;
          }}
          onChange={this.handleChange}
        />
        {this.state.checking ? <Spinner /> : null}
      </React.Fragment>
    );
  }
}

export { EmailField };
