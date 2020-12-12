import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannel } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const channel = useSelector(selectChannel);
  const user = useSelector(selectUser);
  let [input, setInput] = useState("");
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channel.channelId) {
      db.collection("channels")
        .doc(channel.channelId)
        .collection("messages")
        .orderBy("timestamp")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              messageData: doc.data(),
            }))
          );
        });
    }
  }, [channel]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels")
      .doc(channel.channelId)
      .collection("messages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });
    setInput("");
  };

  useEffect(() => {
    document.querySelector(
      ".chat__messages"
    ).scrollTop = document.querySelector(".chat__messages").scrollHeight;
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <ChatHeader channelName={channel.channelName} />
      </div>

      <div className="chat__messages" containerId="chatmessages">
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>

      <div className="chat__input">
        <AddCircleIcon className="add" fontSize="large" />
        <form>
          <input
            placeholder={`Message ${channel.channelName}`}
            className="chatInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={(e) => sendMessage(e)} type="submit">
            Send Message
          </button>
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
