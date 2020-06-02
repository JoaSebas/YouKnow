import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBTAKug_mTt71vX5YDYTqwjhS23SMzi0as",
    authDomain: "youknow-92c34.firebaseapp.com",
    databaseURL: "https://youknow-92c34.firebaseio.com",
    projectId: "youknow-92c34",
    storageBucket: "youknow-92c34.appspot.com",
    messagingSenderId: "697821944256",
    appId: "1:697821944256:web:68cc2999f09ee64b459025",
    measurementId: "G-340PTQ4C29"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const storage = firebase.storage().ref();
  const auth = firebase.auth();
  export{db,storage,auth}