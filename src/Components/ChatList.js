import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./ChatList.css";
import ChatTile from "./ChatTile";

const ChatList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("whatsapp-rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  console.log(rooms);
  return (
    <div className="chatlist">
      <div className="chatlist__addroom">
        <input
          type="text"
          className="chatlist__room-input"
          placeholder="Enter room Id"
        />

        <div className="buttons">
          <button className="icon-button room-input__cancel">
            <i class="fas fa-times"></i>
          </button>
          <button className="icon-button room-input__add">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      {rooms.map((room) => (
        <ChatTile senderName={room.data.name} id={room.id} key={room.id} />
      ))}
    </div>
  );
};

export default ChatList;
