// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSG8-KlzDTHHNkvLS6ioPrD_P1XK9KrP4",
  authDomain: "lmkscloud.firebaseapp.com",
  projectId: "lmkscloud",
  storageBucket: "lmkscloud.appspot.com",
  messagingSenderId: "626221629609",
  appId: "1:626221629609:web:65371b5d41260110eee9b8",
  measurementId: "G-631QGYG5F1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
