import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBJF6Sq03ME__vnXphXtsQNZRam7-5Vpf0",
  authDomain: "idobatakaigi-with-ham-20bb1.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-20bb1",
  storageBucket: "idobatakaigi-with-ham-20bb1.appspot.com",
  messagingSenderId: "456201769574",
  appId: "1:456201769574:web:845866a5855709536553a7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database(app);
const messagesRef = database.ref("message")

export const pushMessage = ({ name, text}) => {
    messagesRef.push({ name, text})
}
