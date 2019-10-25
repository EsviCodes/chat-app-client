import React, { Component } from "react";

export default class extends Component {
  state = {
    message: ""
  };

  onSubmit = event => {
    //console.log("Submit ChatRoomForm");
    event.preventDefault();
    this.setState({
      message: ""
    });
  };

  onChange = event => {
    //console.log("I am Changing");
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="messageForm"
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            placeholder="TypeYourMessageHere" // this one is nice!
          ></input>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}
