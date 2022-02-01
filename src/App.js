import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import UsersList from "./usersList/usersList";
import NewTrip from "./newTrip/newTrip";
import TripsList from "./tripsList/tripsList";
import EditTrip from "./editTrip/editTrip";
import EditUser from "./editUser/editUser";
import NewUser from "./newUser/newUser";
import Home from "./home/home";

function App() {
  const trips = [
    {
      id:"01",
      lineNumber: "lineNumber",
      busCompany: "busCompany",
      departure: "departure",
      arrival: "arrival",
      time: "time",
      days: "days",
      station: "station",
      verified: "verified",
    },
    {
      id:"02",
      lineNumber: "lineNumber",
      busCompany: "busCompany",
      departure: "departure",
      arrival: "arrival",
      time: "time",
      days: "days",
      station: "station",
      verified: "verified",
    },
    {
      id:"03",
      lineNumber: "lineNumber",
      busCompany: "busCompany",
      departure: "departure",
      arrival: "arrival",
      time: "time",
      days: "days",
      station: "station",
      verified: "verified",
    },
  ];
  const users = [
    {
      id: "011",
      fullName: "bachir moundher",
      email: "moundher@gmail.com",
      phone: "0672481618",
      username: "gutsu996",
      type: "admin",
    },
    {
      id: "012",
      fullName: "bachir moundher",
      email: "moundher@gmail.com",
      phone: "0672481618",
      username: "gutsu996",
      type: "admin",
    },
    {
      id: "013",
      fullName: "bachir moundher",
      email: "moundher@gmail.com",
      phone: "0672481618",
      username: "gutsu996",
      type: "admin",
    },
  ];
  const user = {
    id: "01",
    fullName: "bachir moundher",
    email: "moundher@gmail.com",
    phone: "0672481618",
    username: "gutsu996",
    type: "admin",
  };
  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/users" element={<UsersList users={users} />} />
          <Route exact path="/editUser/:id" element={<EditUser />} />
          <Route exact path="/addUser" element={<NewUser />} />
          <Route exact path="/trips" element={<TripsList trips = {trips} />} />
          <Route exact path="/addTrip" element={<NewTrip />} />
          <Route exact path="/editTrip/:id" element={<EditTrip />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
