import React, { useEffect, useState } from "react";
import HeaderRight from "./HeaderRight";
import db from "../firebase";
import "./ChatScreen.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import firebase from "firebase";

const ChatScreen = () => {
  const [messageInput, setMessageInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const { roomId } = useParams();

  useEffect(() => {
    db.collection("whatsapp-rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setRoomName(snapshot.data().name);
      });

    db.collection("whatsapp-rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("whatsapp-rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      messages: messageInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessageInput("");
  };
  console.log(roomMessages);
  return (
    <section className="chatscreen">
      <HeaderRight roomName={roomName} />

      <div className="chatscreen__container">
        <div className="chatscreen__message-container">
          {roomMessages.map((message) => (
            <div
              className={`${
                message.name === user.displayName && "message-outgoing"
              }
               ${message.name !== user.displayName && "message-incoming"}`}
            >
              {message.messages}
            </div>
          ))}
        </div>
        <form className="chatscreen__inputs">
          <div className="chatscreen__buttons">
            <button className="icon-button" type="button">
              <i class="fas fa-grin-alt"></i>
            </button>
            <button className="icon-button" type="button">
              <i class="fas fa-paperclip"></i>
            </button>
          </div>
          <input
            type="text"
            value={messageInput}
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            placeholder="Type a message"
            className="chatscreen__chat-input"
          />
          <div className="chatscreen__buttons">
            <button
              onClick={(e) => sendMessage(e)}
              className="icon-button send-button"
              type="submit"
            >
              <i class="fas fa-paper-plane"></i>
            </button>
            {/* <button className="icon-button" type="button">
              <i class="fas fa-microphone"></i>
            </button> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChatScreen;
