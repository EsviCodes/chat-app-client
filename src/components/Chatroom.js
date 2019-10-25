import React, { Component } from "react";
import url from "../constants";
import ChatroomForm from "./ChatroomForm";
import { connect } from "react-redux";
import { addMessages } from "../actions/messages-actions";

class Chatroom extends Component {
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
      this.props.addMessages(messages);
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

const mapStateToProps = reduxState => {
  return { messages: reduxState.message };
};

const mapDispatchToProps = { addMessages };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom);
