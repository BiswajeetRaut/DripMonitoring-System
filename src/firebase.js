// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// import {getDatabse} from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyCg_MLIpNh5ERKKaIuHM9UfzUzAtaRbZMQ",
  authDomain: "drip-monitor-3c8bc.firebaseapp.com",
  databaseURL: "https://drip-monitor-3c8bc-default-rtdb.firebaseio.com",
  projectId: "drip-monitor-3c8bc",
  storageBucket: "drip-monitor-3c8bc.appspot.com",
  messagingSenderId: "614853893018",
  appId: "1:614853893018:web:4a0ba7d5afd957d63af823",
  measurementId: "G-GW8QXG3D80"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const realdb = firebaseApp.database();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export {realdb};
  export default db;