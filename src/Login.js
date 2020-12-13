import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"
          alt="Discord"
        ></img>
      </div>
      <div className="login__div__container">
        <div className="login__div">
          <h2>Discord Clone Launched</h2>
          <p>Welcome to my Discord Clone! Please sign in.</p>
          <button onClick={signIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
