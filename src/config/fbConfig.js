import firebase from 'firebase/app';
import 'firebase/firestore';// it is nosql database deals with collections and documents
 import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyAP0_5AwjusvOWnBDe8FKayEJe9rmp0ZdE",
    authDomain: "startingapp-963d5.firebaseapp.com",
    databaseURL: "https://startingapp-963d5.firebaseio.com",
    projectId: "startingapp-963d5",
    storageBucket: "startingapp-963d5.appspot.com",
    messagingSenderId: "485073812096",
    appId: "1:485073812096:web:75e851c80b9dadce"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true }); export default firebase;