import React, { Component } from "react";
import url from "../constants";
import ChatroomForm from "./ChatroomForm";

export default class Chatroom extends Component {
  state = {
    messages: []
  };
  source = new EventSource(`${url}/stream`);

  componentDidMount() {
    console.log("Chat Room Component says hi"); // works
    console.log("URL is:", url);
    console.log("source", this.source);

    // this will get called everytime a message is sent
    this.source.onmessage = event => {
      //console.log("Got a message!", event);
      const messages = JSON.parse(event.data);
      this.setState({
        messages
      });
    };
  }

  render() {
    console.log("STATE IN CHATROOM", this.state);
    return (
      <div>
        <h2>Hello from the Chat Room</h2>
        <h3>Messages</h3>
        <ul>
          {this.state.messages.map(message => (
            <li key={message.id}>{message.message}</li>
          ))}
        </ul>
        <ChatroomForm />
      </div>
    );
  }
}
