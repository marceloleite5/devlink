
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQSaWSs8RCBeyTNBzr9qKpIYuqRRJ8gRI",
  authDomain: "reactlinks-a58f4.firebaseapp.com",
  projectId: "reactlinks-a58f4",
  storageBucket: "reactlinks-a58f4.firebasestorage.app",
  messagingSenderId: "311751504491",
  appId: "1:311751504491:web:6a3ca8cfaf47b6c3d9372e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db};