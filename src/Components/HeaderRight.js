import Avatar from "avataaars";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./HeaderRight.css";
const HeaderRight = ({ roomName, dp }) => {
  const [{ roomAvatar }] = useStateValue();
  console.log(roomAvatar);

  return (
    <div className="header__right">
      <div className="header__personinfo">
        <div className="header__dp">{roomAvatar}</div>
        <div className="header__personname">{roomName}</div>
      </div>
      <div className="buttons">
        <button className="icon-button">
          <i class="fas fa-search"></i>
        </button>

        <button className="icon-button">
          <i class="fas fa-ellipsis-v"></i>
        </button>
        {/* <button className="icon-button" onClick>
          <i class="fas fa-address-card"></i>
        </button> */}
      </div>
    </div>
  );
};

export default HeaderRight;
