import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGdmErK4ssvaFAAEdGnpkeb1ZHEgMydH8",
  authDomain: "openai-fc1a7.firebaseapp.com",
  projectId: "openai-fc1a7",
  storageBucket: "openai-fc1a7.appspot.com",
  messagingSenderId: "908917304184",
  appId: "1:908917304184:web:9021ab9770f8729714f68d"
};

// Initialize Firebase
const app = getApps?.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
