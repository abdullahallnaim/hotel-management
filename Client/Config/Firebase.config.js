// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLyt-kKT3077R0cMP6FdZVm0n16eo1QA",
  authDomain: "hotel-88a85.firebaseapp.com",
  projectId: "hotel-88a85",
  storageBucket: "hotel-88a85.firebasestorage.app",
  messagingSenderId: "831196071182",
  appId: "1:831196071182:web:85206ae82aa7cb186c835f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
