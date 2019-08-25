import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC1HduecZdrc4_-5XnQ9OQR7ug5GouVoAQ",
    authDomain: "posts-manager-app.firebaseapp.com",
    databaseURL: "https://posts-manager-app.firebaseio.com",
    projectId: "posts-manager-app",
    storageBucket: "posts-manager-app.appspot.com",
    messagingSenderId: "389730848597",
    appId: "1:389730848597:web:12be279914396555"
};
firebase.initializeApp(firebaseConfig);

export default firebase;