// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0W0OphNV0fSZ-OexO97VzrKdS_bNwUo",
  authDomain: "upload-file-cf5c4.firebaseapp.com",
  projectId: "upload-file-cf5c4",
  storageBucket: "upload-file-cf5c4.appspot.com",
  messagingSenderId: "134935969241",
  appId: "1:134935969241:web:fbcb7596a0fb7d1a1a2dc8",
  measurementId: "G-HKXXHY47C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)