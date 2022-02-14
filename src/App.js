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
import ProtectedRoute from "./protectedRoute/protectedRoute";
import { UserAuthContextProvider } from "./authContext/userAuthContext";
import Login from "./login/login";

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
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
        <Navbar />
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<ProtectedRoute>
                  <Home />
                </ProtectedRoute> } />
          <Route exact path="/users" element={<ProtectedRoute><UsersList users = {users} /></ProtectedRoute>} />
          <Route exact path="/editUser/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
          <Route exact path="/addUser" element={<ProtectedRoute><NewUser /></ProtectedRoute>}/>
          <Route exact path="/trips" element={<ProtectedRoute><TripsList trips = {trips} /></ProtectedRoute>} />
          <Route exact path="/addTrip" element={<ProtectedRoute></ProtectedRoute>} />
          <Route exact path="/editTrip/:id" element={<ProtectedRoute><EditTrip /></ProtectedRoute>} />
     

         </Routes>
        </UserAuthContextProvider>
     
      </Router>
    </div>
  );
}

export default App;
