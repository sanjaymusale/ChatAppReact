import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function MessageBody(props) {
  return (
    <div className="msg-container" id="messagesCont">
      <div className="messages">
        <div className="message-list-today">
          <hr className="hr-text" data-content="TODAY" />
        </div>
        {props.messages.map((msg, i) => {
          const date = msg.date.getHours() + ":" + msg.date.getMinutes();

          if (msg.type === "SENT") {
            return (
              <div key={i + 1} className="message-list-sent ">
                <div className="message-date-sent">{date}</div>
                <div className="message-content-sent tri-right left-top">
                  <span>{msg.message}</span>
                </div>
              </div>
            );
          } else {
            return (
              <div key={i + 1} className="message-list-recieved">
                <div className="message-date-received">{date}</div>
                <div className="message-content-recieved tri-left right-top">
                  <span>{msg.message}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    messages: state
  };
};

MessageBody.propTypes = {
  messages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(MessageBody);
