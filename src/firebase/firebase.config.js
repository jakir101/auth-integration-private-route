// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiYYU64NIixQ1wsPVINwEnAw3WedCJS8I",
  authDomain: "auth-integration-private-7aeec.firebaseapp.com",
  projectId: "auth-integration-private-7aeec",
  storageBucket: "auth-integration-private-7aeec.appspot.com",
  messagingSenderId: "340251439009",
  appId: "1:340251439009:web:792325c3092a65059aa5e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;