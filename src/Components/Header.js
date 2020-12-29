import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <h3 className="title">Whatsapp</h3>

      <div className="buttons">
        <button className="icon-button">
          <i class="fas fa-search"></i>
        </button>
        <button className="icon-button">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
