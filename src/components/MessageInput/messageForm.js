import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/message";
import { animateScroll } from "react-scroll";
import PropTypes from "prop-types";

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  scrollToBottom = () => {
    console.log("scroll to bottom");
    animateScroll.scrollToBottom({
      containerId: "messagesCont"
    });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      message: this.state.message,
      date: new Date(),
      type: "SENT"
    };
    this.setState({ message: "" }, this.scrollToBottom);
    this.props.dispatch(sendMessage(data));
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="msg-input">
          <input
            type="text"
            name="message"
            placeholder="Enter Your Message"
            value={message}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="msg-send-button">
          <input type="submit" value="SEND" />
        </div>
      </form>
    );
  }
}

MessageForm.proptype = {
  sendMessage: PropTypes.func.isRequired
};

export default connect()(MessageForm);
