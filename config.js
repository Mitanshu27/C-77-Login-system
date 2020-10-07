import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBkBo2J0I8j4LPuu-hZjdkiv_E-WcdQSh0",
    authDomain: "barter-system-b58bc.firebaseapp.com",
    databaseURL: "https://barter-system-b58bc.firebaseio.com",
    projectId: "barter-system-b58bc",
    storageBucket: "barter-system-b58bc.appspot.com",
    messagingSenderId: "384735251615",
    appId: "1:384735251615:web:7596a375ea83c2e53a66aa"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
