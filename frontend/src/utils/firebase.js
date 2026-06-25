import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiview-c49f5.firebaseapp.com",
  projectId: "aiview-c49f5",
  storageBucket: "aiview-c49f5.firebasestorage.app",
  messagingSenderId: "547243307640",
  appId: "1:547243307640:web:52547564ac6ab36d3ef38d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}