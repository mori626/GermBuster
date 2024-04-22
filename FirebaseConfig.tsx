import firebase from 'firebase/app';
import { initializeApp } from '@firebase/app';
import { FirebaseApp } from '@firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmkjad18XQfizhiUj5jbrt2ehRc6Sjh9E",
  authDomain: "germbuster-9e6cd.firebaseapp.com",
  projectId: "germbuster-9e6cd",
  storageBucket: "germbuster-9e6cd.appspot.com",
  messagingSenderId: "568701667995",
  appId: "1:568701667995:web:2c8780fb4fa793f98dd43e",
  measurementId: "G-53NRFMLHX4"
};  



export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

