import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDTzO-JJmuAC-baVlJrNU_UoMXHAT-pnsY",
    authDomain: "linkedin-5e95b.firebaseapp.com",
    projectId: "linkedin-5e95b",
    storageBucket: "linkedin-5e95b.appspot.com",
    messagingSenderId: "766974346598",
    appId: "1:766974346598:web:a80299e0092046c95eb4a7"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;
