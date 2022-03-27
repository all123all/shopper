import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

//Note: i know that it's not good to write the apiKey here, i'm only doing this to make the testing easier. This apiKey will soon be changed
const firebaseConfig = {
  apiKey: "AIzaSyDE5otgQXBAG5Rd03pVfgJbXWXvg8U6fVs",
  authDomain: "shopper-e385d.firebaseapp.com",
  projectId: "shopper-e385d",
  storageBucket: "shopper-e385d.appspot.com",
  messagingSenderId: "681936456699",
  appId: "1:681936456699:web:5e2b189f07fa9fb152d95e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);