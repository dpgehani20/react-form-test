import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAu2NKlQGwyRHCeLD_VPL2BOlTL0pbvNgY",
    authDomain: "fir-form-test-3e081.firebaseapp.com",
    projectId: "fir-form-test-3e081",
    storageBucket: "fir-form-test-3e081.appspot.com",
    messagingSenderId: "1042737232384",
    appId: "1:1042737232384:web:2b33268c04c03cd33f36e5"
});

var db = firebaseApp.firestore();

export { db };



