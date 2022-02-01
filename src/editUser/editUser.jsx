import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import "./editUser.css";
export default function EditUser() {
  const itemId = useParams();
  const [user, setUser] = useState({});
  useEffect(()=>{
    setUser({
      id: itemId.id,
      fullName: "bachir moundher"+itemId.id,
      email: "moundher@gmail.com",
      phone: "0672481618",
      username: "gutsu996",
      type: "admin",
    });
  },[])
  return (
    <div className="mainContainer">
      <h1 className="containerTitle">تعديل المستخدم</h1>
      <div className="editUserWrapper">
        <div className="container">
          <div className="userInfoDisplay">
            <p>الاسم الكامل </p>
            <p>{user.fullName}</p>
          </div>
          <div className="userInfoDisplay">
            <p>البريد الإلكتروني</p>
            <p>{user.email}</p>
          </div>
          <div className="userInfoDisplay">
            <p>رقم الهاتف</p>
            <p>{user.phone}</p>
          </div>
          <div className="userInfoDisplay">
            <p>الوظيفة</p>
            <p>{user.type}</p>
          </div>
          <div className="userInfoDisplay">
            <p>إسم المستخدم</p>
            <p>{user.username}</p>
          </div>
        </div>
        <div className="container">
          <div className="userEditInput">
            <label htmlFor="fullName">الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder={user.fullName}
            />
          </div>
          <div className="userEditInput">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="text"
              name="email"
              id="email"
              disabled
              placeholder={user.email}
            />
          </div>
          <div className="userEditInput">
            <label htmlFor="phone">الارقم الهاتف</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder={user.phone}
            />
          </div>
          <div className="userEditInput">
            <label htmlFor="type">الوظيفة</label>
            <select className="newUserSelect" name="type" id="type">
              <option value="admin">مدير محطة</option>
              <option value="busAdmin">مدير مؤسسة نقل</option>
            </select>
          </div>
          <div className="userEditInput">
            <label htmlFor="username">إسم المستخدم</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder={user.username}
            />
          </div>
          <div className="userEditInput">
            <button>تعديل</button>
          </div>
        </div>
      </div>
    </div>
  );
}
