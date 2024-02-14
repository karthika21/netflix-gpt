// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJdWPzJDhXXFOusR8tqVqLF1QOMrTJfw",
  authDomain: "netflixgpt-b0ddc.firebaseapp.com",
  projectId: "netflixgpt-b0ddc",
  storageBucket: "netflixgpt-b0ddc.appspot.com",
  messagingSenderId: "79418313987",
  appId: "1:79418313987:web:230bde56fabc62185d6d36",
  measurementId: "G-ZQNLJ08RRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();