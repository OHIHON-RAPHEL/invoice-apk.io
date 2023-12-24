import firebase from "firebase/app";
// import "firebase/database"; 
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWBf_Rar1ienZ7cculEqJK4aDOHOVznC4",
    authDomain: "invoice-app-c8bb0.firebaseapp.com",
    projectId: "invoice-app-c8bb0",
    storageBucket: "invoice-app-c8bb0.appspot.com",
    messagingSenderId: "649520729595",
    appId: "1:649520729595:web:c3af78dd1e8725b06ccf5e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // const database = firebase.database();

export default firebaseApp.firestore();