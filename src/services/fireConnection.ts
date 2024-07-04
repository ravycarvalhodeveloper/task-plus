import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU2JUe8XZbpKvKkQdcJK24cBn28yVipNY",
  authDomain: "taskplus-1d84b.firebaseapp.com",
  projectId: "taskplus-1d84b",
  storageBucket: "taskplus-1d84b.appspot.com",
  messagingSenderId: "607329485807",
  appId: "1:607329485807:web:b2502993ef0499efde2c1a"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp )

export {db}