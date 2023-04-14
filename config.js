import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDY_nq4q5ySNGIKe97Ugmdq5wOh8L5Z2rk",
  authDomain: "projeto-71-80ebb.firebaseapp.com",
  projectId: "projeto-71-80ebb",
  storageBucket: "projeto-71-80ebb.appspot.com",
  messagingSenderId: "679377660867",
  appId: "1:679377660867:web:0b396c98fa01bc14beeb76"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
