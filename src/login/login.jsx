import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseUserAuth } from "../authContext/userAuthContext";
import "./login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UseUserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    console.log(email)
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(()=> {
    let inputs = document.getElementsByClassName('loginInput');
    for(let item of inputs){
      let placeholder = item.placeholder;
      item.value = "";
      item.placeholder =placeholder;
    }
  }, [])

  return (
    <div className="login">
      <div className="container">
        <div className="login-wrapper">
          <div className="logo-wrapper">
            <div className="login-picture"></div>
            <span>dashboard</span>
          </div>
          <div className="login-form">
            <h1 className="title">تسجيل الدخول</h1>
            <div className="login-input">
              <label For="email">البريد الإلكتروني</label>
              <input
                type="email"
                required
                name="email"
                className="loginInput"
                placeholder="البريد الإلكتروني"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="login-input">
              <label For="password">كلمة السر</label>
              <input
                type="password"
                required
                name="password"
                className="loginInput"
                placeholder="************"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <h3 className="error-messages">{error}</h3>
            <div className="login-input">
              <button className="loginButton" onClick={handleLogin}>
                سجل دخولك
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
