import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Jyjv9XpDyv0h5TsFltiPUkAayp7G_t0",
  authDomain: "blog-80906.firebaseapp.com",
  projectId: "blog-80906",
  storageBucket: "blog-80906.appspot.com",
  messagingSenderId: "299902624082",
  appId: "1:299902624082:web:50efbeebd3ce860c819a8b",
  measurementId: "G-4RVSJWPVTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
