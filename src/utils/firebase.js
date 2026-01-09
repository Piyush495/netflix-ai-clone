// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rkwMszAitXnvkYUkFHQ_-qVcgPtLLDQ",
  authDomain: "netflix-ai-clone.firebaseapp.com",
  projectId: "netflix-ai-clone",
  storageBucket: "netflix-ai-clone.firebasestorage.app",
  messagingSenderId: "955253654938",
  appId: "1:955253654938:web:bd088736b6d684c41d6623",
  measurementId: "G-HFWSRBZREE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();