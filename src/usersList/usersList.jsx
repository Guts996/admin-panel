import React, { useEffect, useState } from "react";
import ToolsBar from "../toolsBar/toolsBar";
import "./usersList.css";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function UsersList(props) {
  const usersList = props.users;
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Users");
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
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div>
      <div className="mainContainer">
        <h1 className="containerTitle">قائمة المستخدمين</h1>
        <div className="usersListWrapper">
          <div className="InfosDisplayHeader">
            <input type="checkbox" name="" id="" value="" disabled />
            <p>الإسم الكامل</p>
            <p>البريد الإلكتروني</p>
            <p>رقم الهاتف</p>
            <p>الوظيفة</p>
            <p>إسم المستخدم</p>
          </div>
          {users.map((user) => (
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
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.type}</p>
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      </div>
      <ToolsBar editComp={"editUser"} addComp={"addUser"} item={checkedItem} sourcePage={"user"}/>
    </div>
  );
}
