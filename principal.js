document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Y-QfNnTDQPJdJthBluYah0EZO-SQzY4",
  authDomain: "mecanica-48f76.firebaseapp.com",
  projectId: "mecanica-48f76",
  storageBucket: "mecanica-48f76.appspot.com",
  messagingSenderId: "406884910971",
  appId: "1:406884910971:web:33a7a18a6840d115f25fde",
  measurementId: "G-3M5RRJXYB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 