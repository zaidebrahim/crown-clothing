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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log("Error creating user !", error.message);
      }
      
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;