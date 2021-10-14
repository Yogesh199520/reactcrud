import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBRmre2Pg-dRkaP9nAHtGqhIZ1NAfaWvSM",
    authDomain: "s2021mp.firebaseapp.com",
    databaseURL: "https://s2021mp-default-rtdb.firebaseio.com/",
    projectId: "s2021mp",
    storageBucket: "s2021mp.appspot.com",
    messagingSenderId: "492975126730",
    appId: "1:492975126730:web:a58f2d4ac693d19cecdc33"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();