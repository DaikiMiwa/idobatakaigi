import firebase from "firebase"

const {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGINGSENDER_ID,
    REACT_APP_APP_ID,
} = process.env

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGINGSENDER_ID,
    appId: REACT_APP_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = firebase.database(app);
export const messagesRef = database.ref("message")

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text })
}
