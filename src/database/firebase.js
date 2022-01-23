import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGckSTeSqmMNTeSeH5BF64GBt2QUCKZno",
  authDomain: "webapp-dd881.firebaseapp.com",
  databaseURL: "https://webapp-dd881-default-rtdb.firebaseio.com",
  projectId: "webapp-dd881",
  storageBucket: "webapp-dd881.appspot.com",
  messagingSenderId: "167053496296",
  appId: "1:167053496296:web:5d692634eeb00653d35e5d",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = firebase.storage();

export default app;
