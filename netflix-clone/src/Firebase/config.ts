import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Define the Firebase config object type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Firebase configuration
const firebaseConfig : FirebaseConfig = {
  apiKey: "AIzaSyB22K3aFlkd-TiMc4edxfPMd2vF1jypSwg",
  authDomain: "netflix-clone-78ccf.firebaseapp.com",
  projectId: "netflix-clone-78ccf",
  storageBucket: "netflix-clone-78ccf.firebasestorage.app",
  messagingSenderId: "563866901303",
  appId: "1:563866901303:web:2d1fbb7232e07cc57d18b2",
  measurementId: "G-E0PFD0RBHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const analytics = getAnalytics(app);



// Export with proper TypeScript types
export { db, auth, analytics };

