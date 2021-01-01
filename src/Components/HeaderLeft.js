import { Avatar } from "avataaars";
import React from "react";

const HeaderLeft = () => {
  return (
    <div className="header__left">
      <div className="header__dp">
        <Avatar
          style={{ width: "50px", height: "50px" }}
          avatarStyle="Circle"
          topType="LongHairMiaWallace"
          accessoriesType="Prescription02"
          hairColor="BrownDark"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="PastelBlue"
          eyeType="Happy"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Light"
        />
      </div>
      <div className="buttons">
        <button className="icon-button"></button>
        <button className="icon-button">
          <i class="far fa-envelope"></i>
        </button>
        <button className="icon-button">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default HeaderLeft;
