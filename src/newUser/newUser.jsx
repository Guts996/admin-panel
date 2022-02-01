import React from "react";
import "./newUser.css";
export default function NewUser() {
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
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              name="email"
              id="email"
              disabled
              placeholder="moundher.bachir@gmail.com"
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="phone">الارقم الهاتف</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="0672481618"
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="phone">كلمة السر</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </div>
          <div className="newUserInput">
            <label htmlFor="type">الوظيفة</label>
            <select className="newUserSelect" name="type" id="type">
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
            />
          </div>
          <div className="newUserInput">
            <button>إضافة</button>
          </div>
        </div>
      </div>
    </div>
  );
}
