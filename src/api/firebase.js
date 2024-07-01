// firebase config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEVW6AW0yEZC4MjQWszRZ5h1hpXWu_UI0",
  authDomain: "cyop-42869.firebaseapp.com",
  projectId: "cyop-42869",
  storageBucket: "cyop-42869.appspot.com",
  messagingSenderId: "361181237548",
  appId: "1:361181237548:web:a6c3ee36e864fdab8b9c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Init Service
export const db = getFirestore(app);

// Collection ref
export const colref = collection(db, "Users")

export default app;