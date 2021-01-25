import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDBZZ-kQDrKupeV1aS0EOTZUwtE_ukaAus",
    authDomain: "whatsapp-web-233c7.firebaseapp.com",
    projectId: "whatsapp-web-233c7",
    storageBucket: "whatsapp-web-233c7.appspot.com",
    messagingSenderId: "476582686242",
    appId: "1:476582686242:web:4f293d303cf7f51a93e47b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;