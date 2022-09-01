// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXukhuEAnqRAnZuQ6TfRbYpW56r4e_wU",
  authDomain: "crud-f9011.firebaseapp.com",
  projectId: "crud-f9011",
  storageBucket: "crud-f9011.appspot.com",
  messagingSenderId: "427619014785",
  appId: "1:427619014785:web:9f7056831362406be0d580",
  measurementId: "G-8JFTVK48CE"
};

// Initialize Firebase
var firebaseDB =  firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
export default firebaseDB.database().ref();
// var Firebase         =  require('firebase');
// var FirebaseAPIKey   =  require('AIzaSyBXXukhuEAnqRAnZuQ6TfRbYpW56r4e_wU');