import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();
export function useAuth() {
  return useContext(userAuthContext);
}
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true)
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth : ", currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return unsubscribe
  }, []);

  return (
    <userAuthContext.Provider value={{ user, signUp, signIn, logOut }}>
        {!loading && children}
    </userAuthContext.Provider>
  );
}
export function UseUserAuth() {
  return useContext(userAuthContext);
}
