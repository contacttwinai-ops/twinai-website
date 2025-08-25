import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHRVx_-_HwFNQ6rryyaD88w6983qr-R-I",
    authDomain: "qynero-a69b6.firebaseapp.com",
    projectId: "qynero-a69b6",
    storageBucket: "qynero-a69b6.appspot.com",
    messagingSenderId: "764600906213",
    appId: "1:764600906213:web:98e60a670661b144e63f0c",
    measurementId: "G-2JT0J0H0GM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, googleProvider, db };
