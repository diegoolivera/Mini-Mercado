
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-9bi5-nNG4AFJtgGaSx4C7MnDHCq8_pQ",
  authDomain: "basedatos-30956.firebaseapp.com",
  projectId: "basedatos-30956",
  storageBucket: "basedatos-30956.appspot.com",
  messagingSenderId: "318263779496",
  appId: "1:318263779496:web:7e448f026b7cf2d30da29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
