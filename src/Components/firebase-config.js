import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' // importing from authentcation library on firebase

const firebaseConfig = {
  apiKey: "AIzaSyBK54cqf231HCqetjhLwZyyrB1PImZ3tWU",
  authDomain: "pawesome-d8412.firebaseapp.com",
  projectId: "pawesome-d8412",
  storageBucket: "pawesome-d8412.appspot.com",
  messagingSenderId: "629788921637",
  appId: "1:629788921637:web:2e9a680096c51909e0d4cc",
  measurementId: "G-5Q42HJ4L4P"
};

const app = initializeApp(firebaseConfig)


// passing getAuth to say app has authentication 
export const auth = getAuth(app)