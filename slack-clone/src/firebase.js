// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCOudVxI2A3HVAJ9PgOgVw72vTPMjn9iBQ",
    authDomain: "vinod-slack-clone.firebaseapp.com",
    projectId: "vinod-slack-clone",
    storageBucket: "vinod-slack-clone.appspot.com",
    messagingSenderId: "456800392691",
    appId: "1:456800392691:web:5deb19ba520475a2036e86",
    measurementId: "G-EGFWQ6NY7D"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;