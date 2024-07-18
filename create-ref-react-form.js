import React, { Component } from 'react';
import './style.css';

export default class SampleForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
    this.changeEmail = (e) => {
      this.setState({ email: e.target.value });
    };
    this.changePassword = (e) => {
      this.setState({ password: e.target.value });
    };
    this.onSubmitChange = (e) => {
      e.preventDefault();
      alert(this.state.email + ' ' + this.state.password);
      console.log(this.state.email + ' ' + this.state.password);
    };
  }
  render() {
    return (
      <form onSubmit={this.onSubmitChange}>
        <h3>Sample Form</h3>
        <label>Email </label>
        <input
          type="text"
          ref={this.inputRef}
          value={this.state.email}
          onChange={this.changeEmail}
          placeholder="enter your email"
        />{' '}
        <br />
        <label>Password </label>
        <input
          type="text"
          ref={this.inputRef}
          value={this.state.password}
          onChange={this.changePassword}
          placeholder="enter your password"
        />{' '}
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
