import Avatar from "avataaars";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatarParams from "../avatarParams";
import db from "../firebase";
import "./ChatTile.css";

const ChatTile = ({
  senderName = "Someone 🖤",

  time = "12:00 AM",
  id = "",
  msgStatus = "far fa-check-circle",
}) => {
  const [roomMessages, setRoomMessages] = useState([]);
  // console.log(avatarParams.skinColor[]);
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
    setAvatar({
      topType:
        avatarParams.topType[
          Math.floor(Math.random() * avatarParams.topType.length)
        ],
      accessoriesType:
        avatarParams.accessoriesType[
          Math.floor(Math.random() * avatarParams.accessoriesType.length)
        ],
      hairColor:
        avatarParams.hairColor[
          Math.floor(Math.random() * avatarParams.hairColor.length)
        ],
      facialHairType:
        avatarParams.facialHairType[
          Math.floor(Math.random() * avatarParams.facialHairType.length)
        ],
      clotheType:
        avatarParams.clotheType[
          Math.floor(Math.random() * avatarParams.clotheType.length)
        ],
      clotheColor:
        avatarParams.clotheColor[
          Math.floor(Math.random() * avatarParams.clotheColor.length)
        ],
      eyeType:
        avatarParams.eyeType[
          Math.floor(Math.random() * avatarParams.eyeType.length)
        ],
      eyebrowType:
        avatarParams.eyebrowType[
          Math.floor(Math.random() * avatarParams.eyebrowType.length)
        ],
      mouthType:
        avatarParams.mouthType[
          Math.floor(Math.random() * avatarParams.mouthType.length)
        ],
      skinColor:
        avatarParams.skinColor[
          Math.floor(Math.random() * avatarParams.skinColor.length)
        ],
    });
  }, []);

  return (
    <Link to={`/room/${id}`}>
      <div className="tile">
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
            {roomMessages[0]?.messages || ""}
          </p>
        </div>
        <p className="tile-time">{time}</p>
      </div>
    </Link>
  );
};

export default ChatTile;
