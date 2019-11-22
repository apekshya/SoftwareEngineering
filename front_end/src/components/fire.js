// Your web app's Firebase configuration
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBnfjFZUi7aokEArro9iXae8nvljGgHk_8",
    authDomain: "talkau.firebaseapp.com",
    databaseURL: "https://talkau.firebaseio.com",
    projectId: "talkau",
    storageBucket: "talkau.appspot.com",
    messagingSenderId: "1048368603809",
    appId: "1:1048368603809:web:21ae0f004a97ae1c91c6e0",
    measurementId: "G-WJV4K3S685"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);
   export default fire;