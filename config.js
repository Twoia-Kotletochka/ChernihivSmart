import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCt57E8FwSRjKmXDFX88Vbw1XQO8S1Ks2k",
    authDomain: "chesmart-4e30c.firebaseapp.com",
    databaseURL: "https://chesmart-4e30c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chesmart-4e30c",
    storageBucket: "chesmart-4e30c.appspot.com",
    messagingSenderId: "1023454700500",
    appId: "1:1023454700500:web:b2c66aebbf7f7ba01a2c41",
    measurementId: "G-4QZH6ZH18E"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
