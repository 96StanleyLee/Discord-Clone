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
          src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/603px-Discord_logo.svg.png"
          alt="Discord"
        ></img>
      </div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;
