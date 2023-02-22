import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD8SOIfZ-A-lEC0Qp9N4u3x5Nm6zJPeS84",
  authDomain: "react-contact-75891.firebaseapp.com",
  projectId: "react-contact-75891",
  storageBucket: "react-contact-75891.appspot.com",
  messagingSenderId: "128521631095",
  appId: "1:128521631095:web:a09c04ff345f4813285d72",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
