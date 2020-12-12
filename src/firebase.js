import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTWUnyglGsgQMJRB-WLpgyJRgRSRAcvhE",
  authDomain: "discord-clone-e3d9e.firebaseapp.com",
  projectId: "discord-clone-e3d9e",
  storageBucket: "discord-clone-e3d9e.appspot.com",
  messagingSenderId: "1044876118970",
  appId: "1:1044876118970:web:59ca7a1c03a076f391ab83",
  measurementId: "G-444NBKFCZM",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
//Initialize the app with the config
const db = fireBaseApp.firestore();
//We can grab the database /firestore and store it in this variable
const auth = firebase.auth();
//This is the same with authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
