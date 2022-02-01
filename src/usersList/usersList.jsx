import React, { useState } from "react";
import ToolsBar from "../toolsBar/toolsBar";
import "./usersList.css";

export default function UsersList(props) {
  const usersList = props.users;
  const [checkboxes, setCheckBoxes] = useState(
    document.getElementsByName("checkbox")
  );
  const [checkedItem, setCheckedItem] = useState("");
  function checkOnlyThis(e) {
    checkboxes.forEach((item) => {
      if (item.value === e.target.value) {
        if (item.checked) {
          item.checked = true;
          setCheckedItem((prevChecked) => e.target.value);
        } else {
          item.checked = false;
          setCheckedItem((prevChecked) => "");
        }
      } else {
        item.checked = false;
      }
    });
  }
  return (
    <div>
      <div className="mainContainer">
        <h1 className="containerTitle">قائمة المستخدمين {checkedItem}</h1>
        <div className="usersListWrapper">
          <div className="InfosDisplayHeader">
            <input type="checkbox" name="" id="" value="" disabled />
            <p>الإسم الكامل</p>
            <p>البريد الإلكتروني</p>
            <p>رقم الهاتف</p>
            <p>الوظيفة</p>
            <p>إسم المستخدم</p>
          </div>
          {usersList.map((user) => (
            <div className="userInfosWrapper">
              <input
                type="checkbox"
                name="checkbox"
                id=""
                value={user.id}
                onChange={(e) => {
                  checkOnlyThis(e);
                }}
              />
              <p>{user.fullName}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.type}</p>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
      <ToolsBar editComp={"editUser"} addComp={"addUser"} item={checkedItem}/>
    </div>
  );
}
