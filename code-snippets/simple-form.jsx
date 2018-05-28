<form>
  <input name="name" type="text" required />
  <input name="phone" type="tel" required />
  <button>submit</button>
</form>


interface Form {
  checkValidity(): true | false
}

interface Input {
  validity: {
    /* ... */
    valid: true | false
  }
}

interface Input {
  setCustomValidity(message: string): void;
  validity: {
    /* ... */
    valid: true | false
  }
}

function isValidEmail(str) {
  const input = document.createElement('input');
  input.type = 'email';
  input.value = str;
  return input.validity.valid;
}


handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    this.setState({ submitAttempted: true });
    return;
  }
  /* handle valid form */
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      {/* ... */}
    </form>
  );
}
