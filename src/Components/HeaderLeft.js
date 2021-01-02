import Avatar from "avataaars";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./HeaderLeft.css";
const HeaderLeft = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header__left">
      <div className="header__dp-container">
        <img src={user?.photoURL} className="header__left-dp" />
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
