// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA694_iYg2pwV9wK3-CYSexcqRw9jEthjs",
  authDomain: "codeg-dev.firebaseapp.com",
  projectId: "codeg-dev",
  storageBucket: "codeg-dev.appspot.com",
  messagingSenderId: "616000440285",
  appId: "1:616000440285:web:700a1e4698d19a78999834"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export default firebaseAuth;