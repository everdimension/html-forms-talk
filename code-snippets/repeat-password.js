<form onSubmit={this.handleSubmit}>
  <input
    name="password"
    type="password"
    onChange={this.handleChange}
    required
  />
  <input
    name="repeatPassword"
    type="password"
    placeholder="repeat password"
    pattern={escapeRegex(this.state.password || '')}
    required
  />
  <p>
    <button>submit</button>
  </p>
</form>;
