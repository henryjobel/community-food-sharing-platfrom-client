// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtGsa8jbe4ijNaQJ9HzTr6l8DSMpYc2UY",
  authDomain: "foodsharing-3f15a.firebaseapp.com",
  projectId: "foodsharing-3f15a",
  storageBucket: "foodsharing-3f15a.appspot.com",
  messagingSenderId: "744264544254",
  appId: "1:744264544254:web:3cf824f2820b2f3b119aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app