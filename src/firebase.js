import firebase from "firebase";




    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTsbYsjdgOue2Cl40tJ6lOOAOhDcEJZDo",
    authDomain: "twitter-clone-c7065.firebaseapp.com",
    projectId: "twitter-clone-c7065",
    storageBucket: "twitter-clone-c7065.appspot.com",
    messagingSenderId: "432910921577",
    appId: "1:432910921577:web:f470da57b2f8b2a11897f8",
    measurementId: "G-SXQKDDFSJ4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


  export default db;