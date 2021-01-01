import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClK1g9xTYpD3EzYXP4RR1QzRZHyqCRkrg",
  authDomain: "d-clones.firebaseapp.com",
  projectId: "d-clones",
  storageBucket: "d-clones.appspot.com",
  messagingSenderId: "1078756264369",
  appId: "1:1078756264369:web:4d11eafdf75545e0af9590",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
