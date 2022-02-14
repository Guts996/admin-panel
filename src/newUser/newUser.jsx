import React from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseUserAuth } from "../authContext/userAuthContext";
import "./newUser.css";
export default function NewUser() {
  const [newUsername, setNewUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newType, setNewType] = useState("admin");
  const usersCollectionRef = collection(db, "Users");
  const { signUp } = UseUserAuth();
  const navigate = useNavigate();
  const createUser = async (e) => {
    e.preventDefault();
    try {
      await signUp(newEmail, newPassword);
      await addDoc(usersCollectionRef, {
        name: newName,
        username: newUsername,
        phone: newPhone,
        email: newEmail,
        address: newAddress,
        password: newPassword,
        type: newType,
      });
      alert("تمت إضافة مستخدم جديد");
      navigate("/users");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="mainContainer">
      <h1 className="containerTitle">إضافة مستخدم</h1>
      <div className="newUserWrapper">
        <div className="container">
          <div className="newUserInput">
            <label htmlFor="fullName">الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="bachir moundher"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="moundher.bachir@gmail.com"
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="phone">الارقم الهاتف</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="0672481618"
              onChange={(event) => {
                setNewPhone(event.target.value);
              }}
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="phone">كلمة السر</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              onChange={(event) => {
                setNewPassword(event.target.value);
              }}
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="type">الوظيفة</label>
            <select
              className="newUserSelect"
              name="type"
              id="type"
              onChange={(event) => {
                setNewType(event.target.value);
              }}
            >
              <option value="admin">مدير محطة</option>
              <option value="busAdmin">مدير مؤسسة نقل</option>
            </select>
          </div>
          <div className="newUserInput">
            <label htmlFor="username">إسم المستخدم</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="gutsu996"
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />
          </div>
          <div className="newUserInput">
            <button onClick={(e) => createUser(e)}>إضافة</button>
          </div>
        </div>
      </div>
    </div>
  );
}
