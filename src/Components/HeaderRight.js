import React from "react";
import "./HeaderRight.css";
const HeaderRight = ({ roomName, dp }) => {
  return (
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
  );
};

export default HeaderRight;
