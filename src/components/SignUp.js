import React, { Component } from "react";
import * as request from "superagent";
import url from "../constants";

export default class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeUsername = event => {
    console.log("Change Username");
    this.setState({
      username: event.target.value
    });
  };

  onChangePassword = event => {
    console.log("Change password");
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("Submit Sign Up");

    request
      .post(`${url}/users`)
      .send({
        email: this.state.username,
        password: this.state.password
      })
      .catch(console.error);

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            onChange={this.onChangeUsername}
            value={this.state.username}
            placeholder="username"
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={this.onChangePassword}
            value={this.state.password}
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
