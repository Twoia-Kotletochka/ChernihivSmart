import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDp8ymiN4rJdUlQVW0qQ5WwwFrTqsZB9Ns",
    authDomain: "chernihivsmart.firebaseapp.com",
    projectId: "chernihivsmart",
    storageBucket: "chernihivsmart.appspot.com",
    messagingSenderId: "164102240264",
    appId: "1:164102240264:web:68f87e84708a9745b839bd",
    measurementId: "G-33E33GN4F6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}