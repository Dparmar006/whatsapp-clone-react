import React from "react";
import "./Header.css";
const Header = ({ name = "Someone ♥" }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__dp">
          <i class="fas fa-user-circle"></i>
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
      <div className="header__right">
        <div className="header__personinfo">
          <div className="header__dp">
            <i class="fas fa-user-circle"></i>
          </div>
          <div className="header__personname">{name}</div>
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
