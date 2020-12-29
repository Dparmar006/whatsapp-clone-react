import React from "react";
import "./ChatTile.css";
const ChatTile = ({
  senderName = "Someone 🖤",
  msg = "Invalid message",
  time = "12:00 AM",
  senderDp,
  msgStatus = "far fa-check-circle",
}) => {
  return (
    <div className="tile">
      <div className="tile-dp">
        <i class="fas fa-user-circle"></i>
      </div>
      <div className="tile-msginfo">
        <p className="tile-name">{senderName}</p>
        <p className="tile-message">
          <i class={msgStatus}></i>
          {msg}
        </p>
      </div>
      <p className="tile-time">{time}</p>
    </div>
  );
};

export default ChatTile;
