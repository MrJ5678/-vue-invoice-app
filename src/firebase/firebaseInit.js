import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyCXyE1TiC1i2MmPWNqVSCTH1K-xVK7t9Og",
  authDomain: "invoice-app-yt-d04df.firebaseapp.com",
  projectId: "invoice-app-yt-d04df",
  storageBucket: "invoice-app-yt-d04df.appspot.com",
  messagingSenderId: "936331631615",
  appId: "1:936331631615:web:d8e2a56fbc5b7ca593e5ca",
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
