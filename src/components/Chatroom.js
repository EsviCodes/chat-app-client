import React, { Component } from "react";
import url from "../constants";

export default class Chatroom extends Component {
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    console.log("Chat Room Component says hi"); // works
    console.log("URL is:", url);
    console.log("source", this.source);

    this.source.onmessage = event => {
      console.log("Got a message!", event);
    };
  }

  render() {
    return (
      <div>
        <h3>Hello from the Chat Room</h3>
      </div>
    );
  }
}
