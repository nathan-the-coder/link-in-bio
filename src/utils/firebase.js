// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhUBeMNZ0QUwnGk93tYO9jHhB7YYFTzqY",
  authDomain: "linkinbio-179c4.firebaseapp.com",
  projectId: "linkinbio-179c4",
  storageBucket: "linkinbio-179c4.firebasestorage.app",
  messagingSenderId: "837991089150",
  appId: "1:837991089150:web:5d059bea680e9bcfa036af",
  measurementId: "G-KNFDR50EMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
