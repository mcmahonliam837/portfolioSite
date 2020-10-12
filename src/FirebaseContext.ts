import React from "react";
import firebase from "firebase";
require("firebase/auth");

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

const config = {
  apiKey: "AIzaSyCYpoGTLb0ER0p5FZjFeR6WrE7I6KDEe-g",
  authDomain: "liammcmahon-me.firebaseapp.com",
  databaseURL: "https://liammcmahon-me.firebaseio.com",
  projectId: "liammcmahon-me",
  storageBucket: "liammcmahon-me.appspot.com",
  messagingSenderId: "93311075606",
  appId: "1:93311075606:web:47738f5d87869b093f3c37",
  measurementId: "G-VWG231SXE0",
};

class Firebase {
  public app: firebase.app.App;
  public auth: firebase.auth.Auth;

  constructor() {
    this.app = firebase.initializeApp(config);
    this.auth = this.app.auth();
  }
}

export const FirebaseContext = React.createContext<Firebase | null>(null);

export default Firebase;
