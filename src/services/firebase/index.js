import firebase from "firebase"

const config = {
    apiKey: "AIzaSyAUNAolrKlmqMxrJ0pr_66rgxeYFtapOBY",
    authDomain: "rpdatingapp-b17b0.firebaseapp.com",
    databaseURL: "https://rpdatingapp-b17b0.firebaseio.com",
    projectId: "rpdatingapp-b17b0",
    storageBucket: "rpdatingapp-b17b0.appspot.com",
    messagingSenderId: "165969229905",
    appId: "1:165969229905:web:2ce8152ef9b816543be070",
    measurementId: "G-WE6SLF977B"
}
firebase.initializeApp(config);
const auth = firebase.auth;
const db = firebase.database();

export { auth, db }

