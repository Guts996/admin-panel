import { FiEdit3 } from "react-icons/fi";
import { MdAdd, MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { db, auth } from "../firebase/firebase";
import {
  collection,
  deleteDoc,
  doc,
  deleteUser,
  getAuth,
} from "firebase/firestore";
import "./toolsBar.css";

export default function ToolsBar(props) {
  const handleDelete = async () => {
    if (props.sourcePage != "" && props.sourcePage == "user") {
      const usersCollectionRef = collection(db, "Users");
      const userDocument = doc(usersCollectionRef, props.sourcePage);
      await deleteDoc(userDocument);
      
    }
    if (props.sourcePage != "" && props.sourcePage == "trip") {
      const tripsCollectionRef = collection(db, "Trips");
      const tripDocument = doc(tripsCollectionRef, props.sourcePage);
      await deleteDoc(tripDocument);
    }
  };
  return (
    <div className="toolsBarArea">
      <div className="toolsBar">
        <div className="toolsBarWrapper">
          <div className="toolBarWrapper">
            <div className="tooltip">إضافة</div>
            <Link to={{ pathname: "/" + props.addComp }}>
              <span>
                <i class="icon">
                  <MdAdd />
                </i>
              </span>
            </Link>
          </div>
          <div className="toolBarWrapper">
            <div className="tooltip">تعديل</div>
            {props.item != "" ? (
              <Link to={{ pathname: "/" + props.editComp + "/" + props.item }}>
                <span>
                  <i class="icon">
                    <FiEdit3 />
                  </i>
                </span>
              </Link>
            ) : (
              <span className="disabledLink">
                <i class="icon">
                  <FiEdit3 />
                </i>
              </span>
            )}
          </div>
          <div className="toolBarWrapper">
            <div className="tooltip">حذف</div>
            {props.item != "" ? (
              <span onClick={handleDelete}>
                <i class="icon">
                  <MdDeleteOutline />
                </i>
              </span>
            ) : (
              <span className="disabledLink">
                <i class="icon">
                  <MdDeleteOutline />
                </i>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
