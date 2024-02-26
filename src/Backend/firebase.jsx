import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdR6sX_vkdF8VEdo1SO1C7yRCZeBYCkg",
  authDomain: "carinas-closet.firebaseapp.com",
  projectId: "carinas-closet",
  storageBucket: "carinas-closet.appspot.com",
  messagingSenderId: "441639734650",
  appId: "1:441639734650:web:95239288162d8a2051dac3",
  measurementId: "G-T1SLBTN518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);

export { app, db };
