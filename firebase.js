// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7QTrcuuInU-CMt5MfvIfddHPr0GNLM9o",
  authDomain: "inventory-management-8bfdc.firebaseapp.com",
  projectId: "inventory-management-8bfdc",
  storageBucket: "inventory-management-8bfdc.appspot.com",
  messagingSenderId: "334575404420",
  appId: "1:334575404420:web:a668a7435d316fd2df89d1",
  measurementId: "G-34WDG0RS8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app) ; 

export {firestore} ; 