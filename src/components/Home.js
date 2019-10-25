import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "./SignUp";
import LoginFormContainer from "./LoginFormContainer";

class Home extends Component {
  state = {
    signUp: false,
    login: false
  };

  onSignUp = () => {
    this.setState({
      ...this.state,
      signUp: true
    });
  };

  onLogin = () => {
    this.setState({
      ...this.state,
      login: true
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>My First Chat App!</h1>

        {!this.state.signUp ? (
          <button onClick={this.onSignUp}>Sign Up</button>
        ) : (
          <SignUp />
        )}
        {!this.state.login ? (
          <button onClick={this.onLogin}>Log In</button>
        ) : (
          <LoginFormContainer />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(Home);
