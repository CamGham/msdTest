// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvTiijvp2jnPvnQuJwX-96ozQBhtLLlA",
  authDomain: "msdshooter-5d748.firebaseapp.com",
  projectId: "msdshooter-5d748",
  storageBucket: "msdshooter-5d748.appspot.com",
  messagingSenderId: "220828170947",
  appId: "1:220828170947:web:a166ef59d20be7e32f8076",
  measurementId: "G-60JSFHFE4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);