// Import the functions you need from the SDKs you need
const { initializeApp } = require ("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtCHnWp4D_ZZHPv5ILaSX2UwB8XCe3wZw",
  authDomain: "barvelous-recetario.firebaseapp.com",
  projectId: "barvelous-recetario",
  storageBucket: "barvelous-recetario.appspot.com",
  messagingSenderId: "742264032989",
  appId: "1:742264032989:web:05d9b4718b49f8dedfd534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//CONFIG FIREBASE ADMIN

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "barvelous-recetario.appspot.com",
});

//EXPORTAR
module.exports = {
    app,
    admin
};