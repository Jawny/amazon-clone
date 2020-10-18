import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNh5JwRVg3ggIFtQd6eZKugcY2yvJhhRE",
  authDomain: "clone-b9029.firebaseapp.com",
  databaseURL: "https://clone-b9029.firebaseio.com",
  projectId: "clone-b9029",
  storageBucket: "clone-b9029.appspot.com",
  messagingSenderId: "698761003686",
  appId: "1:698761003686:web:2eacd3ca2afcd4fc1c2a67",
  measurementId: "G-W4X0HJ0L7Z",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
