import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzo9_bp28rUAFBINagAH1QsEO2NQZAdf4",
  authDomain: "tienda-de-videojuegos-cb643.firebaseapp.com",
  projectId: "tienda-de-videojuegos-cb643",
  storageBucket: "tienda-de-videojuegos-cb643.appspot.com",
  messagingSenderId: "61537405725",
  appId: "1:61537405725:web:7d1b393a8e5b2e26452ff4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
