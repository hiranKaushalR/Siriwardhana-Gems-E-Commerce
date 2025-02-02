// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5acHla5bPZqTAfS8nWu6y11iVP9zPohQ",
  authDomain: "siriwardana-gems.firebaseapp.com",
  projectId: "siriwardana-gems",
  storageBucket: "siriwardana-gems.firebasestorage.app",
  messagingSenderId: "133923137749",
  appId: "1:133923137749:web:7e4c675af1065b8dfada5c",
  measurementId: "G-G5XF80H2CB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
