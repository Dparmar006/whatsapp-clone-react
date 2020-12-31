import React from "react";
import "./ChatScreen.css";
const ChatScreen = ({ name }) => {
  return (
    <section className="chatscreen">
      <div className="chatscreen__container">
        <div className="chatscreen__message-container">
          <div className="message-incoming">Hello</div>
          <div className="message-incoming">
            Mollit officia aliqua reprehenderit tempor aliqua ex nostrud magna
            culpa magna ad elit. Ad proident ad incididunt velit. Veniam eu
            consectetur aliqua eu pariatur. Fugiat dolor aliqua reprehenderit
            adipisicing excepteur ad.
          </div>
          <div className="message-outgoing">Hello</div>
          <div className="message-outgoing">
            Mollit officia aliqua reprehenderit tempor aliqua ex nostrud magna
            culpa magna ad elit. Ad proident ad incididunt velit. Veniam eu
            consectetur aliqua eu pariatur. Fugiat dolor aliqua reprehenderit
            adipisicing excepteur ad.
          </div>
          <div className="message-outgoing">
            Mollit officia aliqua reprehenderit tempor aliqua ex nostrud magna
            culpa magna ad elit. Ad proident ad incididunt velit. Veniam eu
            consectetur aliqua eu pariatur. Fugiat dolor aliqua reprehenderit
            adipisicing excepteur ad.
          </div>
          <div className="message-incoming">
            Mollit officia aliqua reprehenderit tempor aliqua ex nostrud magna
            culpa magna ad elit. Ad proident ad incididunt velit. Veniam eu
            consectetur aliqua eu pariatur. Fugiat dolor aliqua reprehenderit
            adipisicing excepteur ad.
          </div>
        </div>
        <div className="chatscreen__inputs">
          <div className="chatscreen__buttons">
            <button className="icon-button">
              <i class="fas fa-grin-alt"></i>
            </button>
            <button className="icon-button">
              <i class="fas fa-paperclip"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="chatscreen__chat-input"
          />
          <div className="chatscreen__buttons">
            <button className="icon-button">
              <i class="fas fa-microphone"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatScreen;
