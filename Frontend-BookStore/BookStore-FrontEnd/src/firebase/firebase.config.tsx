// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVyFdJMht7H3LHXnX81W4vC5vhK4vDJ2c",
  authDomain: "book-store-30c20.firebaseapp.com",
  projectId: "book-store-30c20",
  storageBucket: "book-store-30c20.appspot.com",
  messagingSenderId: "850783691803",
  appId: "1:850783691803:web:fab57f79baa689987504be",
  measurementId: "G-N6LRFQSKKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app