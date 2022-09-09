import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrvTiijvp2jnPvnQuJwX-96ozQBhtLLlA",
    authDomain: "msdshooter-5d748.firebaseapp.com",
    projectId: "msdshooter-5d748",
    storageBucket: "msdshooter-5d748.appspot.com",
    messagingSenderId: "220828170947",
    appId: "1:220828170947:web:a166ef59d20be7e32f8076",
    measurementId: "G-60JSFHFE4F"
  };

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
