// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7JR9BOZePRzadyyy5OMMvUZKVbC3vPig",
  authDomain: "marcosdarri-ecommerce.firebaseapp.com",
  projectId: "marcosdarri-ecommerce",
  storageBucket: "marcosdarri-ecommerce.appspot.com",
  messagingSenderId: "1007506296051",
  appId: "1:1007506296051:web:8e3091f82a48a5aae53b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app;
}