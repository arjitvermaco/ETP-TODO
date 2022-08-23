// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVJhf2nDFKQbdWqKHwzkrnpq3uUBikxQ8",
  authDomain: "reacttodoetp-9654.firebaseapp.com",
  projectId: "reacttodoetp-9654",
  storageBucket: "reacttodoetp-9654.appspot.com",
  messagingSenderId: "906179374753",
  appId: "1:906179374753:web:785385db464bd324a88ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);