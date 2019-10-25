import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Chatroom from "./components/Chatroom";
import LoginFormContainer from "./components/LoginFormContainer";
import Home from "./components/Home";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/chatroom"> Chat Room </Link>
        {this.props.loggedIn ? (
          "You're logged in"
        ) : (
          <Link to="/login"> Login</Link>
        )}

        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginFormContainer} />
        <Route path="/chatroom" exact component={Chatroom} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);
