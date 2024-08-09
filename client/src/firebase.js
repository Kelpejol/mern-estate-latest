// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "react-firebase-auth-proj-29ca2.firebaseapp.com",
  projectId: "react-firebase-auth-proj-29ca2",
  storageBucket: "react-firebase-auth-proj-29ca2.appspot.com",
  messagingSenderId: "669167967552",
  appId: "1:669167967552:web:787a3901b4b731f47b6ea5",
  measurementId: "G-51C9WV3B9S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
