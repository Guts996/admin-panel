import {Navigate} from "react-router-dom";
import { useAuth } from "../authContext/userAuthContext";
export default function ProtectedRoute({children}) {
    let {user} = useAuth();
    if(!user){
       return <Navigate to="/login"></Navigate>
    }
  return children;
}
