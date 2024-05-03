var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); // backend ile web arasındaki baglantiyi initilaze editor


const auth = firebase.auth(); 
const  db = firebase.firestore(); 
const  functions = firebase.functions();
