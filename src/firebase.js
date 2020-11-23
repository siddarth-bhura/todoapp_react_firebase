import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA6y7zES9that2X9KaOU0q74XiLn99iFtY",
    authDomain: "todoapp-react-firebase-6da98.firebaseapp.com",
    databaseURL: "https://todoapp-react-firebase-6da98.firebaseio.com",
    projectId: "todoapp-react-firebase-6da98",
    storageBucket: "todoapp-react-firebase-6da98.appspot.com",
    messagingSenderId: "956320960899",
    appId: "1:956320960899:web:ac145731a4e10edf02e6b6",
    measurementId: "G-G55RCKJ5T2"
  });

  const firestore = firebaseApp.firestore();

  export default firestore