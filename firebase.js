// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDrOeFGv4-vbuG7HVN_bOi7oyk-fp-1vY",
  authDomain: "next-fire-tailwind-twitter.firebaseapp.com",
  projectId: "next-fire-tailwind-twitter",
  storageBucket: "next-fire-tailwind-twitter.appspot.com",
  messagingSenderId: "64542757124",
  appId: "1:64542757124:web:74d00b21ac8b9743398051",
  measurementId: "G-G1LTWY7ZNG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
