import React from "react";
import debounce from "lodash/debounce";
import { Spinner } from '../Spinner';

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

  handleConfirm = debounce(value => {
    checkEmail(value).then(
      () => {
        this.node.setCustomValidity("");
        this.setState({ checking: false });
      },
      () => {
        this.node.setCustomValidity("alreadyTaken");
        this.setState({ checking: false });
      },
    );
  }, 500);

  handleChange = event => {
    const input = event.target;
    const { validity } = input;
    if (validity.valueMissing || validity.typeMismatch) {
      input.setCustomValidity('');
    }
    if (
      input.validity.valid ||
      input.validity.customError
    ) {
      input.setCustomValidity("checking...");
      this.setState({ checking: true });
      this.handleConfirm(input.value);
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
