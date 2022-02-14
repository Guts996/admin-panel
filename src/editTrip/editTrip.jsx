import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./editTrip.css";
export default function EditTrip() {
  const itemId = useParams();
  const [trip, setTrip] = useState({});
  const [days, setDay] = useState([]);
  function setDays(event) {
    var data = days;
    const index = data.indexOf(event.target.value);
    if (event.target.checked) {
      if (!days.includes(event.target.value)) data.push(event.target.value);
      setDay(data);
    } else {
      if (days.includes(event.target.value)) {
        if (index > -1) {
          data.splice(index, 1);
        }
        setDay(data);
      }
    }
    console.log(days);
  }
  useEffect(() => {
    setTrip({
      id: itemId.id,
      lineNumber: "lineNumber",
      busCompany: "busCompany",
      departure: "departure  + id " + itemId.id,
      arrival: "arrival",
      time: "time",
      days: "days",
      station: "station",
      verified: "verified",
    });
  }, []);
  return (
    <div className="mainContainer">
      <h1 className="containerTitle">تعديل الرحلة</h1>
      <div className="editTripWrapper">
        <div className="container">
          <div className="tripInfoDisplay">
            <p>الإنطلاق</p>
            <p>{trip.departure}</p>
          </div>
          <div className="tripInfoDisplay">
            <p>محطة الإنطلاق</p>
            <p>{trip.station}</p>
          </div>
          <div className="tripInfoDisplay">
            <p>الوصول</p>
            <p>{trip.arrival}</p>
          </div>
          <div className="tripInfoDisplay">
            <p>ساعة الإنطلاق</p>
            <p>{trip.time}</p>
          </div>
          <div className="tripInfoDisplay">
            <p>الأيام</p>
            <p>{trip.days}</p>
          </div>
        </div>
        <div className="container">
          <div className="tripEditInput">
            <label htmlFor="fullName">ساعة الإنطلاق</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder={trip.time}
            />
          </div>
          <div className="tripEditInput">
            <label htmlFor="tripDays">الأيام</label>
            <div className="displayDays">
              <div className="displayDay">
                <input
                  type="checkbox"
                  name="day"
                  id="Fri"
                  value="Fri"
                  onChange={(event) => {
                    setDays(event);
                  }}
                />
                <label for="Fri">الجمعة</label>
              </div>
              <div className="displayDay">
              <input
                type="checkbox"
                name="day"
                id="Sat"
                value="Sat"
                onChange={(event) => {
                  setDays(event);
                }}
              />
              <label for="Sat">السبت</label>
              </div>
              <div className="displayDay">
              
              <input
                type="checkbox"
                name="day"
                id="Sun"
                value="Sun"
                onChange={(event) => {
                  setDays(event);
                }}
              />
               
              <label for="Sun">الأحد</label>
              </div>
              <div className="displayDay">
              <input
                type="checkbox"
                name="day"
                id="Mon"
                value="Mon"
                onChange={(event) => {
                  setDays(event);
                }}
              />
              <label for="Mon">الإثنين</label>
              </div>
              <div className="displayDay">
              <input
                type="checkbox"
                name="day"
                id="Tue"
                value="Tue"
                onChange={(event) => {
                  setDays(event);
                }}
              />
              <label for="Tue">الثلاثاء</label>
              </div>
              <div className="displayDay">
              <input
                type="checkbox"
                name="day"
                id="Wed"
                value="Wed"
                onChange={(event) => {
                  setDays(event);
                }}
              />
              <label for="Wed">الأربعاء</label>
              </div>
              <div className="displayDay">
              <input
                type="checkbox"
                name="day"
                id="Thu"
                value="Thu"
                onChange={(event) => {
                  setDays(event);
                }}
              />
              <label for="Thu">الخميس</label>
              </div>
            </div>
          </div>
          <div className="tripEditInput">
            <button>تعديل</button>
          </div>
        </div>
      </div>
    </div>
  );
}
