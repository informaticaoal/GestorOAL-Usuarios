// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBV3rwUiTj13wfntfd6t7w0HJmqSMY2vpA',
    authDomain: 'aplicacion-usuarios-oal.firebaseapp.com',
    projectId: 'aplicacion-usuarios-oal',
    storageBucket: 'aplicacion-usuarios-oal.firebasestorage.app',
    messagingSenderId: '480046685859',
    appId: '1:480046685859:web:ce5308f6640a312787e916',
    measurementId: 'G-CJ90PLLLGJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export { db };
