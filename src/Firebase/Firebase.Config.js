import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ref,getStorage } from "firebase/storage";
import { getAuth,createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5mWSMvXYd_7yxMQxYssHCXX8hXcfQv7k",
  authDomain: "e-commerce-reac.firebaseapp.com",
  databaseURL: "https://e-commerce-reac-default-rtdb.firebaseio.com",
  projectId: "e-commerce-reac",
  storageBucket: "e-commerce-reac.appspot.com",
  messagingSenderId: "405019668657",
  appId: "1:405019668657:web:7eb4f8d8d902c8bcf47290",
  measurementId: "G-TTQ7NN6J7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize authentication
const storage = getStorage(app);
const storageRef = ref(storage, 'productImages/');

export { db, auth, storage, storageRef };