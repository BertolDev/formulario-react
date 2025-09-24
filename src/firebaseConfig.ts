import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0o_n04yWbtI-BrOywKx9BmSXVW905U2g",
  authDomain: "formulario-react-b7aed.firebaseapp.com",
  projectId: "formulario-react-b7aed",
  storageBucket: "formulario-react-b7aed.firebasestorage.app",
  messagingSenderId: "599979005872",
  appId: "1:599979005872:web:203694803254c7164ca875",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
