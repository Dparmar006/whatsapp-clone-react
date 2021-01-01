import Avatar from "avataaars";
import React, { useEffect, useState } from "react";
import avatarParams from "../avatarParams";
import "./ChatTile.css";

const ChatTile = ({
  senderName = "Someone 🖤",
  msg = "Invalid message",
  time = "12:00 AM",

  msgStatus = "far fa-check-circle",
}) => {
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
          {msg}
        </p>
      </div>
      <p className="tile-time">{time}</p>
    </div>
  );
};

export default ChatTile;
