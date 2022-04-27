// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw6qGKx76oUsgY4jQET9hzcCRDWs--_J0",
  authDomain: "volentiner-photo-project.firebaseapp.com",
  projectId: "volentiner-photo-project",
  storageBucket: "volentiner-photo-project.appspot.com",
  messagingSenderId: "589488768094",
  appId: "1:589488768094:web:d565903c258a9b60c560cf",
  measurementId: "G-B8WP6JP88B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;