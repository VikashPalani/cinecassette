
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmocxWsrb8BTroi_zfu5Nq8YK_aHwH6ZM",
  authDomain: "cine-cassette1.firebaseapp.com",
  projectId: "cine-cassette1",
  storageBucket: "cine-cassette1.appspot.com",
  messagingSenderId: "243567606747",
  appId: "1:243567606747:web:15a8c6fffa532e01ed05fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();