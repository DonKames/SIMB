import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//console.log(process.env)

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
}

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();


const db = getFirestore(app);


export {
    db,
    googleAuthProvider,
};

/*
 PARA USAR
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxDFifujbvTyu-1lDuii0wFNAottJmJ4g",
  authDomain: "simb-dev.firebaseapp.com",
  projectId: "simb-dev",
  storageBucket: "simb-dev.appspot.com",
  messagingSenderId: "135670660864",
  appId: "1:135670660864:web:90f3e46631a6acd2ba3de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/