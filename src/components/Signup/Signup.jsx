import React from "react";
import logo from "/images/logo.png";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup">
      <div className="header_signup">
        <Link to="/">
          <img src={logo} alt="logo" className="logo_signup" />
        </Link>
        <Link
          to="/signin"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            fontWeight: "bold",
            position: "relative",
            top: "3vh",
          }}
        >
          Sign in
        </Link>
      </div>
      <hr />
      <div className="signup_text">
        <Text-1>STEP 1 OF 2</Text-1>
        <Text-2>Finish setting up your account</Text-2>
        <Text-3>
          Netflix is personalized for you. Create a password to watch on any
          device at any time.
        </Text-3>
      </div>

      <Link to={"/RegEmail"}>
        <button className="signup_button_1">Next</button>
      </Link>
      <div className="footer">
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "grey",
            position: "relative",
            left: "5vw",
            top: "3vh",
          }}
        >
          Questions? Contact us.
        </Link>
      </div>
    </div>
  );
}
