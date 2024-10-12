// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkVhnlc1Ey3PpvKAlrvwI3HK_4Ahh31pQ",
    authDomain: "cvinder-6d848.firebaseapp.com",
    databaseURL: "https://cvinder-6d848-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cvinder-6d848",
    storageBucket: "cvinder-6d848.appspot.com",
    messagingSenderId: "625618764269",
    appId: "1:625618764269:web:9c0502429829f862fd67e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore()

export const realtimeDb = getDatabase(app);
export const firestoteDb = getFirestore(app);