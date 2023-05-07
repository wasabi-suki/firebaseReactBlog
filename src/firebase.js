// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD6z8zBeMqSGGPOVi9KHG6b9RH639Apvw",
  authDomain: "blog-efd3e.firebaseapp.com",
  projectId: "blog-efd3e",
  storageBucket: "blog-efd3e.appspot.com",
  messagingSenderId: "1012246597100",
  appId: "1:1012246597100:web:73728a48cded378df384c9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
