import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
   "YOUR_FIREBASE_CONFIG"
  });

  const firestore = firebaseApp.firestore();

  export default firestore
