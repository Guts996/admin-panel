import {initializeApp} from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgLPNalsYxwtYwueFo1-aZShbqLEXQ9Ts",
  authDomain: "abridh-1de8a.firebaseapp.com",
  projectId: "abridh-1de8a",
  storageBucket: "abridh-1de8a.appspot.com",
  messagingSenderId: "248568840282",
  appId: "1:248568840282:web:7b441a2f461ada105c9863",
  measurementId: "G-RM9V9FXR4V"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;


