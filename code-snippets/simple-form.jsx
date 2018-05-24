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


function isValidEmail(str) {
  const input = document.createElement('input');
  input.type = 'email';
  input.value = str;
  return input.validity.valid;
}
