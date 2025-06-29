// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDP1pj4AeSk6VAs8D3SxAvCrnkb0MWge0",
  authDomain: "my-shipment.firebaseapp.com",
  projectId: "my-shipment",
  storageBucket: "my-shipment.firebasestorage.app",
  messagingSenderId: "104266358372",
  appId: "1:104266358372:web:12596e192a1ada28268971",
  measurementId: "G-GS7WVB4BP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);