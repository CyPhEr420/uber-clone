import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJmWWXG9AUSMumG-qGP1Yv2fiB0VMguuk",
    authDomain: "uber-clone-428f5.firebaseapp.com",
    projectId: "uber-clone-428f5",
    storageBucket: "uber-clone-428f5.appspot.com",
    messagingSenderId: "20839188591",
    appId: "1:20839188591:web:2b6f359f50656a9850e59a"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, auth, provider };