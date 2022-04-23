import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyBmx0gfgjJOYxQHlvGs0ls5sJk6foRf0oA",
  authDomain: "sistema-chamados-74829.firebaseapp.com",
  projectId: "sistema-chamados-74829",
  storageBucket: "sistema-chamados-74829.appspot.com",
  messagingSenderId: "1077999315940",
  appId: "1:1077999315940:web:015a1d2810e6db4d65b5f1",
  measurementId: "G-2V76YH4P5K"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;