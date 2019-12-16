import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3qmGAnE7aALDPROjOnHnknD3-IezA9Qs",
    authDomain: "crwn-db-dae0e.firebaseapp.com",
    databaseURL: "https://crwn-db-dae0e.firebaseio.com",
    projectId: "crwn-db-dae0e",
    storageBucket: "crwn-db-dae0e.appspot.com",
    messagingSenderId: "914831179364",
    appId: "1:914831179364:web:a6ee7706445c4a36966971",
    measurementId: "G-BC9ESQ3KHX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;