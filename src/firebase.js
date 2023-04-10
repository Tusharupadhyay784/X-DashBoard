// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeNjphwEcAl2XeChxy3P-kHvINe6NzRlY",
    authDomain: "dashboard-35ee3.firebaseapp.com",
    projectId: "dashboard-35ee3",
    storageBucket: "dashboard-35ee3.appspot.com",
    messagingSenderId: "829003161815",
    appId: "1:829003161815:web:eef3ccbd6462fde5edd092",
    measurementId: "G-8E9QR84ZVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth , provider};
