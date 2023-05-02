// Importing the functions
import { initializeApp } from "https://www.gstatic.com/firebase.js/9.0.0/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebase.js/9.0.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebase.js/9.0.0/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyBMWDxNhww2KG5knZVn0c_m_JJZpxNEtW4",
  authDomain: "olivethings-dd44f.firebaseapp.com",
  projectId: "olivethings-dd44f",
  storageBucket: "olivethings-dd44f.appspot.com",
  messagingSenderId: "644056585557",
  appId: "1:644056585557:web:326a2e802b556d8eba8bdc"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();