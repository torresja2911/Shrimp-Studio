import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoBT2edF_YJqY6TMQmfFNdJ2oWHhIgfYI",
    authDomain: "shrimp-studio-cd623.firebaseapp.com",
    projectId: "shrimp-studio-cd623",
    storageBucket: "shrimp-studio-cd623.appspot.com",
    messagingSenderId: "186929901257",
    appId: "1:186929901257:web:faca0a8bf914e0d32ea718"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);