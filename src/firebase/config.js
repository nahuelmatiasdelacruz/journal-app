import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBMwipJ5IU-e1waDLB9Ss_K6ZbG_OfsD7Y",
  authDomain: "journal-app-9875e.firebaseapp.com",
  projectId: "journal-app-9875e",
  storageBucket: "journal-app-9875e.appspot.com",
  messagingSenderId: "561692772040",
  appId: "1:561692772040:web:94bacab54aec960ee307fd"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);