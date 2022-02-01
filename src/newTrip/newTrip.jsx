import React from "react";
import "./newTrip.css";
export default function Newtrip() {
  return (
    <div className="mainContainer">
      <h1 className="containerTitle">إضافة رحلة</h1>
      <div className="newtripWrapper">
        <div className="container">
          <div className="newtripInput">
            <label htmlFor="fullName">الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="bachir moundher"
            />
          </div>
          <div className="newtripInput">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              name="email"
              id="email"
              disabled
              placeholder="moundher.bachir@gmail.com"
            />
          </div>
          <div className="newtripInput">
            <label htmlFor="phone">الارقم الهاتف</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="0672481618"
            />
          </div>
          <div className="newtripInput">
            <label htmlFor="phone">كلمة السر</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </div>
          <div className="newtripInput">
            <label htmlFor="type">الوظيفة</label>
            <select className="newtripSelect" name="type" id="type">
              <option value="admin">مدير محطة</option>
              <option value="busAdmin">مدير مؤسسة نقل</option>
            </select>
          </div>
          <div className="newtripInput">
            <label htmlFor="tripname">إسم المستخدم</label>
            <input
              type="text"
              name="tripname"
              id="tripname"
              placeholder="gutsu996"
            />
          </div>
          <div className="newtripInput">
            <button>إضافة</button>
          </div>
        </div>
      </div>
    </div>
  );
}
