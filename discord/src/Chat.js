import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <ChatHeader />
      </div>

      <div className="chat__messages">
        <Message />
        <Message />
      </div>

      <div className="chat__input">
        <AddCircleIcon className="add" fontSize="large" />
        <form>
          <input placeholder="Message" className="chatInput"></input>
          <button type="submit">Send Message</button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
