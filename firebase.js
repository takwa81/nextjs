// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOtn5sX6xSc9LSpHCoLm7R86vCwGQLNP0",
  authDomain: "chat-app-nextjs-996f1.firebaseapp.com",
  projectId: "chat-app-nextjs-996f1",
  storageBucket: "chat-app-nextjs-996f1.appspot.com",
  messagingSenderId: "322197140320",
  appId: "1:322197140320:web:52d48f513171875db26405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
