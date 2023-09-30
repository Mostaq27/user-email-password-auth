// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByb1PKYFKTafsz4IrlrNpPC8tBwOXKmBU",
  authDomain: "user-email-password-auth-3142b.firebaseapp.com",
  projectId: "user-email-password-auth-3142b",
  storageBucket: "user-email-password-auth-3142b.appspot.com",
  messagingSenderId: "393828562410",
  appId: "1:393828562410:web:2b36bf7833f1c00d76ee93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;