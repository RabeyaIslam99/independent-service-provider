// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjvnirwnYHjNWUHf6HtGx4RllsewAvH9E",
  authDomain: "independent-service-prov-8265e.firebaseapp.com",
  projectId: "independent-service-prov-8265e",
  storageBucket: "independent-service-prov-8265e.appspot.com",
  messagingSenderId: "41425992983",
  appId: "1:41425992983:web:900e6e6b7bb0004e688b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;