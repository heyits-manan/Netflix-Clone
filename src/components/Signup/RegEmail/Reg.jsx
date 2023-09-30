import React, { useState } from "react";
import "./Reg.css";
import { Link, Navigate } from "react-router-dom";
import logo from "/images/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export default function Reg() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = () => {
    navigate("/signin");
  };

  return (
    <div className="regemail">
      {" "}
      <div className="header_reg">
        <Link to="/">
          <img src={logo} alt="logo" className="logo_reg" />
        </Link>
        <Link
          to="/signin"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            fontWeight: "500",
            position: "relative",
            top: "3vh",
          }}
        >
          Sign in
        </Link>
      </div>
      <hr />
      <div className="reg_text">
        <Text-1>STEP 2 OF 2</Text-1>
        <Text-2>Create a password to start your membership</Text-2>
        <Text-3>
          Just a few more steps and you're done! We hate paperwork, too.
        </Text-3>
      </div>
      <form className="emailpassword" onSubmit={handleChange}>
        <input
          type="email"
          id="emailReg"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />

        <input
          type="password"
          id="passReg"
          placeholder="Add a Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button className="reg_button" type="submit" onClick={signUp}>
          Sign Up
        </button>
      </form>
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
