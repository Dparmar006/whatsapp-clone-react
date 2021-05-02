import Avatar from "avataaars";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import { getRandomAvatar, getShortMessage } from "../functions/utilities";
import { useStateValue } from "../StateProvider";
import "./ChatTile.css";

const ChatTile = ({
  senderName = "Someone 🖤",

  time = "12:00 AM",
  id = "",
  msgStatus = "far fa-check-circle",
}) => {
  const [roomMessages, setRoomMessages] = useState([]);
  const [{ activeRoom }] = useStateValue();
  const [avatar, setAvatar] = useState({
    topType: "",
    accessoriesType: "",
    hairColor: "",
    facialHairType: "",
    clotheType: "",
    clotheColor: "",
    eyeType: "",
    eyebrowType: "",
    mouthType: "",
    skinColor: "",
  });

  useEffect(() => {
    if (id) {
      db.collection("whatsapp-rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

  useEffect(() => {
    setAvatar(getRandomAvatar());
  }, []);
  console.log(activeRoom, id);
  return (
    <Link to={`/room/${id}`}>
      <div className={activeRoom == id ? "tile activeTile" : "tile"}>
        <div className="tile-dp">
          <Avatar
            style={{ width: "50px", height: "50px" }}
            avatarStyle="Circle"
            topType={avatar.topType}
            accessoriesType={avatar.accessoriesType}
            hairColor={avatar.hairColor}
            facialHairType={avatar.facialHairType}
            clotheType={avatar.clotheType}
            clotheColor={avatar.clotheColor}
            eyeType={avatar.eyeType}
            eyebrowType={avatar.eyebrowType}
            mouthType={avatar.mouthType}
            skinColor={avatar.skinColor}
          />
        </div>
        <div className="tile-msginfo">
          <p className="tile-name">{senderName}</p>
          <p className="tile-message">
            <i class={msgStatus}></i>
            {getShortMessage(roomMessages[0]?.messages || "", 25)}
          </p>
        </div>
        <p className="tile-time">
          {new Date(
            roomMessages[0]?.timestamp?.toDate().getDate()
          ).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
};

export default ChatTile;
