import firebaseConfig from "./firebase.config"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};
export default initializeAuthentication;
