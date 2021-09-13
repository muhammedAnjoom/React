import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-ehzOeKeiMrUY7nxfJJvS5e3bvqKtRZQ",
    authDomain: "olx-clone-3e481.firebaseapp.com",
    projectId: "olx-clone-3e481",
    storageBucket: "olx-clone-3e481.appspot.com",
    messagingSenderId: "434613088237",
    appId: "1:434613088237:web:f39dbd25b52e9ab635c1e4",
    measurementId: "G-WBRXLBHFK9"
  };

export default  firebase.initializeApp(firebaseConfig)