import React, { useState } from "react";
import ToolsBar from "../toolsBar/toolsBar";
import "./tripsList.css";

export default function TripsList(props) {
  const tripsList = props.trips;
  const [checkedItem, setCheckedItem] = useState("");
  const [checkboxes, setCheckBoxes] = useState(
    document.getElementsByName("checkbox")
  );
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
      console.log(checkedItem);
    });
  }
  return (
    <div>
      <div className="mainContainer">
        <h1 className="containerTitle">قائمة الرحلات {checkedItem}</h1>
        <div className="tripsListWrapper">
          <div className="InfosDisplayHeader">
            <input type="checkbox" name="" id="" value="" disabled />
            <p>رقم الخط</p>
            <p>شركة النقل</p>
            <p>الإنطلاق</p>
            <p>الوصول</p>
            <p>الوقت</p>
            <p>الأيام</p>
            <p>التأكيد</p>
          </div>
          {tripsList.map((trip) => (
            <div className="tripInfosWrapper">
              <input
                type="checkbox"
                name="checkbox"
                id=""
                value={trip.id}
                onChange={(e) => {
                  checkOnlyThis(e);
                }}
              />
              <p>{trip.lineNumber}</p>
              <p>{trip.busCompany}</p>
              <p>{trip.departure}</p>
              <p>{trip.arrival}</p>
              <p>{trip.time}</p>
              <p>{trip.station}</p>
              <p>{trip.verified}</p>
            </div>
          ))}
        </div>
      </div>
      <ToolsBar editComp={"editTrip"} addComp={"addTrip"} item={checkedItem} />
    </div>
  );
}
