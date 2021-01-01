import React, { useEffect, useState } from "react";
import Avatar from "avataaars";
import "./Header.css";
import db from "../firebase";
import { useParams } from "react-router-dom";
import HeaderLeft from "./HeaderLeft";
const Header = () => {
  const [roomName, setRoomName] = useState("");

  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("whatsapp-rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);
  console.log(roomId);
  const addRoomButtonHandle = () => {
    const roomId = prompt("Enter room Id");
  };
  return (
    <header className="header">
      <HeaderLeft />
      <div className="header__right">
        <div className="header__personinfo">
          <div className="header__dp">
            <i class="fas fa-user-circle"></i>
          </div>
          <div className="header__personname">{roomName}</div>
        </div>
        <div className="buttons">
          <button className="icon-button">
            <i class="fas fa-search"></i>
          </button>
          <button className="icon-button">
            <i class="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
