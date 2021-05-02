import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import "./ChatList.css";

import ChatTile from "./ChatTile";
import HeaderLeft from "./HeaderLeft";

const ChatList = () => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const submitRoomName = () => {
    if (roomName !== "") {
      db.collection("whatsapp-rooms").add({
        name: roomName,
      });
      setRoomName("");
    }
  };
  useEffect(() => {
    const unsubscribeDBSession = db
      .collection("whatsapp-rooms")
      .onSnapshot((snapshot) =>
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    return () => {
      unsubscribeDBSession();
    };
  }, []);

  return (
    <div className="chatlist">
      <HeaderLeft />

      <div className="chatlist__addroom">
        <button
          onClick={submitRoomName}
          className="icon-button room-input__add send-button"
        >
          <i class="fas fa-plus"></i>
        </button>
        <input
          type="text"
          className="chatlist__room-input"
          placeholder="Create group"
          value={roomName}
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
        />
      </div>

      {rooms.map((room) => (
        <ChatTile senderName={room.data.name} id={room.id} key={room.id} />
      ))}
    </div>
  );
};

export default ChatList;
