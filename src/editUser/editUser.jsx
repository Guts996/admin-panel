import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react/cjs/react.development";
import "./editUser.css";
export default function EditUser() {
  const itemId = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const usersCollectionRef = collection(db, "Users");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [intermediateUser, setIntermediateUser] = useState({});
  const handlePhone = (e) => {
    if (e.target.value.length > 0) {
      setUpdatedPhone(e.target.value);
      let editedUser = intermediateUser;
      editedUser.phone = e.target.value;
      setIntermediateUser(editedUser);
    }
  };
  const updateUser = async (e) => {
    const userDocument = doc(db, "Users", itemId.id);
    setIntermediateUser({
      address: user.address,
      email: user.email,
      name: user.name,
      password: user.password,
      phone: updatedPhone !== "" ? updatedPhone : user.phone,
      type: user.type,
      username: user.username,
    });
    try {
      await updateDoc(userDocument, intermediateUser);
      console.log(intermediateUser);
      alert("تمت تعديل المستخدم");
      navigate("/users");
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      const userDoc = doc(usersCollectionRef, itemId.id);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        setUser(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getUser();
  }, []);
  return (
    <div className="mainContainer">
      <h1 className="containerTitle">تعديل المستخدم </h1>
      <div className="editUserWrapper">
        <div className="container">
          <div className="userInfoDisplay">
            <p>الاسم الكامل </p>
            <p>{user.name}</p>
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
              disabled
              type="text"
              name="fullName"
              id="fullName"
              placeholder={user.name}
            />
          </div>
          <div className="userEditInput">
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              disabled
              type="text"
              name="email"
              id="email"
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
              onChange={(e) => handlePhone(e)}
            />
          </div>
          <div className="userEditInput">
            <label htmlFor="type">الوظيفة</label>
            <select disabled className="newUserSelect" name="type" id="type">
              <option value="admin">مدير محطة</option>
              <option value="busAdmin">مدير مؤسسة نقل</option>
            </select>
          </div>
          <div className="userEditInput">
            <label htmlFor="username">إسم المستخدم</label>
            <input
              disabled
              type="text"
              name="username"
              id="username"
              placeholder={user.username}
            />
          </div>
          <div className="userEditInput">
          <button onClick={(e) => updateUser(e)}>
                  تعديل
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
