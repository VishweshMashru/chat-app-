// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAflMu7wyQu22CgDqneM0UJ2cXvA--Y1kQ",
  authDomain: "chat-6850b.firebaseapp.com",
  projectId: "chat-6850b",
  storageBucket: "chat-6850b.appspot.com",
  messagingSenderId: "1013960153919",
  appId: "1:1013960153919:web:ed0ea072473bd47064518a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();