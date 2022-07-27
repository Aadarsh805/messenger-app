import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCQydL8s9eUH2C-JaB0huQ506NSL1KttMY",
    authDomain: "messenger-app-b0af2.firebaseapp.com",
    projectId: "messenger-app-b0af2",
    storageBucket: "messenger-app-b0af2.appspot.com",
    messagingSenderId: "1089653729749",
    appId: "1:1089653729749:web:ab37d38fc99c1d3ba8755c",
  })
  .auth();
