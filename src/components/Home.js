import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignUp from "./SignUp";
import LoginFormContainer from "./LoginFormContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to</h2>
        <h1>My First Chat App!</h1>

        <SignUp />
        <LoginFormContainer />
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
