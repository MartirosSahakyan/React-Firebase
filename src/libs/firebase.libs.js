import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXzNG3KoXKOV6QYKatiyZImTJSkHfuXiQ",
    authDomain: "react-firebase-acf4a.firebaseapp.com",
    projectId: "react-firebase-acf4a",
    storageBucket: "react-firebase-acf4a.appspot.com",
    messagingSenderId: "946063499625",
    appId: "1:946063499625:web:abbb320481e806fc721df8"
  };

export default firebase.initializeApp(firebaseConfig);
  
