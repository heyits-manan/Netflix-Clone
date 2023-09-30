import "./Signin.css";
import logo from "/images/logo.png";

import { Link } from "react-router-dom";
import { auth } from "../config/firebase-config";

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/mainPage");
      })
      .catch((error) => {
        alert("Invalid Email or Password !");
        console.log(error);
      });
  };

  return (
    <div className="signin">
      <div className="visuals_signin">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/e4570d17-b9ec-4d8c-9c14-7f0cd1219d6c/NP-en-20230710-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          }
          alt="bg"
          className="bg"
        />
        <Link to="/">
          <img src={logo} alt="logo" className="logo_signin" />
        </Link>
      </div>
      <div className="main_signin">
        <Text-signin>Sign In</Text-signin>
        <form className="d-flex signin" role="search">
          <input
            type="email"
            placeholder="Email or phone number"
            name="email"
            className="email"
            onChange={(event) => setLoginEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="password"
            onChange={(event) => setLoginPassword(event.target.value)}
          />

          <button className="SignIn" type="submit" onClick={signIn}>
            Sign In
          </button>

          <div className="options">
            <Text-RM>
              <label>
                <input type="checkbox" id="rm" />
                Remember me
              </label>
            </Text-RM>
            <Text-Help>
              <Link
                to="/help"
                style={{ textDecoration: "none", color: "rgb(124, 103, 103)" }}
              >
                Need help?
              </Link>
            </Text-Help>
          </div>
        </form>
        <div className="signupRedirect">
          <span>New to Netflix?</span>
          <Link to="/">Sign up now</Link>
        </div>
        <div className="captcha-msg">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </div>
      </div>
    </div>
  );
}
