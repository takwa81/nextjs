// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1vjtI0iVQDljVYmGeEbJXXfEbPgx_k1c",
  authDomain: "todo-app-a5f1b.firebaseapp.com",
  projectId: "todo-app-a5f1b",
  storageBucket: "todo-app-a5f1b.appspot.com",
  messagingSenderId: "113470632370",
  appId: "1:113470632370:web:f5dc6c480495e698f274ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);