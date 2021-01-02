import React from "react";
import { auth, provider } from "./firebase";
import "./LoginPage.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
const LoginPage = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <section className="login">
      <div className="login__container">
        <i class="fab fa-google"></i>
        <div className="login__title">
          <h2>Login / Signup </h2>
        </div>
        <button onClick={signIn} className="login__login-button">
          Signup with Google
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
