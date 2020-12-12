import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import moment from "moment-timezone";

function Message({ message }) {
  let timeStamp = "";
  if (message.messageData.timestamp !== null) {
    timeStamp = moment(new Date(message.messageData.timestamp.toDate()));
    timeStamp = timeStamp.tz("America/New_York").format("MM/DD/YYYY h:mm A");
  }
  return (
    <div className="message">
      <Avatar src={message.messageData.user.photo} />
      <div className="message__info">
        <h4>
          {message.messageData.user.displayName}
          <span className="message__timestamp">{timeStamp}</span>
        </h4>
        <p> {message.messageData.message} </p>
      </div>
    </div>
  );
}

export default Message;
