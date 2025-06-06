// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication (login)
import { getFirestore } from "firebase/firestore"; // For database (chat messages)
import { getStorage } from "firebase/storage"; // For image storage

const firebaseConfig = {
  apiKey: "AIzaSyD0nBbUqxANsyVyWN9K40fFr_1MrcVp2_0",
  authDomain: "shranjay-edae9.firebaseapp.com",
  projectId: "shranjay-edae9",
  storageBucket: "shranjay-edae9.appspot.com",  // Fixed typo here
  messagingSenderId: "603430583859",
  appId: "1:603430583859:web:ba119c5dee1aa4bef66d46",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);       // Export auth for login
export const db = getFirestore(app);    // Export firestore DB for chats
export const storage = getStorage(app); // Export storage for images
