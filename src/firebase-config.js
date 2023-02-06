import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBMXZv-2GfMSIoh0S7kCkIM8XY3gMeMPHk",
  authDomain:"leaderboard-b39a2.firebaseapp.com",
  projectId: "leaderboard-b39a2",
  storageBucket: "leaderboard-b39a2.appspot.com",
  messagingSenderId: "199333827795",
  appId: "1:199333827795:web:6f45a1f8e6d172a24b7026",
  measurementId: "G-G1RCH3ND8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
export {auth,db}