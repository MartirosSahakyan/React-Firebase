import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCXzNG3KoXKOV6QYKatiyZImTJSkHfuXiQ",
    authDomain: "react-firebase-acf4a.firebaseapp.com",
    projectId: "react-firebase-acf4a",
    storageBucket: "react-firebase-acf4a.appspot.com",
    messagingSenderId: "946063499625",
    appId: "1:946063499625:web:abbb320481e806fc721df8",
    databaseURL: 'https://react-firebase-acf4a-default-rtdb.firebaseio.com/'
  };

export default firebase.initializeApp(firebaseConfig);

// const db = firebase.database()
// console.log(db)
export const db = firebase.database();

