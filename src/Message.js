import React, { useEffect, useState } from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import moment from "moment-timezone";
import { useValidateImageURL } from "use-validate-image-url";

function Message({ message }) {
  let [status, setStatus] = useState("");

  let imageStatus = useValidateImageURL(message.messageData.message);

  useEffect(() => {
    if (imageStatus === "valid") {
      setStatus("valid");
    }
  }, [imageStatus]);

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
        {status === "valid" ? (
          <img
            style={{ maxWidth: "500px", maxHeight: "500px" }}
            src={message.messageData.message}
          />
        ) : (
          <p> {message.messageData.message} </p>
        )}
      </div>
    </div>
  );
}

export default Message;
