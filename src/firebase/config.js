import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBN-2kmTE57bPRRYpvNcILeRfVDJsdGyH0",
    authDomain: "financeapp-8f0ba.firebaseapp.com",
    projectId: "financeapp-8f0ba",
    storageBucket: "financeapp-8f0ba.appspot.com",
    messagingSenderId: "877984444876",
    appId: "1:877984444876:web:94925668cc03fefc5c6d69"
  };

  // init firebase

  firebase.initializeApp(firebaseConfig);

  // init services

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();


  export { projectFirestore, projectAuth }

