import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyCxJ2o7IEPO45cE860B9TjHqv6YE-qXxeg",
  authDomain: "fir-bdbef.firebaseapp.com",
  databaseURL: "https://fir-bdbef.firebaseio.com",
  projectId: "fir-bdbef",
  storageBucket: "fir-bdbef.appspot.com",
  messagingSenderId: "6876545957"
});

export const app = firebase;

export const firestore = app.firestore();

export const notesCollection = firestore.collection('notes');

const provider = new firebase.auth.GithubAuthProvider();

export const subscribe = (fn) => firebase.auth().onAuthStateChanged(user => {
  if(user) {
    fn(user);
  } else {
    firebase.auth().signInWithRedirect(provider);
  }
})
