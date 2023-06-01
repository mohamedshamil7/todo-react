// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// APIKEY= "AIzaSyAJNXqU8gbHDXdOXTlUKahsQ52iu3ChVGs",
// AUTHDOMAIN= "todo-40df2.firebaseapp.com",
// PROJECTID= "todo-40df2",
// STORAGEBUCKET="todo-40df2.appspot.com",
// MESSAGESENDERID= "646388571214",
// APPID= "1:646388571214:web:9c6ceb2ab1fa31dd6f771f"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNXqU8gbHDXdOXTlUKahsQ52iu3ChVGs",
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
  authDomain: "todo-40df2.firebaseapp.com",
//   projectId:process.env.PROJECTID ,
  projectId:"todo-40df2" ,
  storageBucket: process.env.STORAGEBUCKET,
//   storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGESENDERID,
//   messagingSenderId: process.env.MESSAGESENDERID,
  appId: process.env.APPID 
//   appId: process.env.APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

