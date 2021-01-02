import Avatar from "avataaars";
import React from "react";
import "./HeaderLeft.css";
const HeaderLeft = () => {
  return (
    <div className="header__left">
      <div className="header__dp">
        <Avatar
          style={{ width: "40px", height: "40px" }}
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
        <button className="icon-button">
          <i class="fas fa-circle-notch"></i>
        </button>
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
