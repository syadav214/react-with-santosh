import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  reset = () => this.setState({ value: "" });

  onChange = ({ target }) => this.setState({ value: target.value });

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.onChange} />
    );
  }
}

export default Input;
