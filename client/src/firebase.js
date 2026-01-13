// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f6d56.firebaseapp.com",
  projectId: "real-estate-f6d56",
  storageBucket: "real-estate-f6d56.firebasestorage.app",
  messagingSenderId: "328625852256",
  appId: "1:328625852256:web:838aa35bc3982f941a1805"
}; 

// Initialize Firebase
export const app = initializeApp(firebaseConfig);