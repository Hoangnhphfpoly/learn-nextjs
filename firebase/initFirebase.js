import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const clientCredentials = {
  apiKey: "AIzaSyAh6nCyogB1uti4HqPl9TGmyAk1TESA38I",
  authDomain: "chat-next-js.firebaseapp.com",
  projectId: "chat-next-js",
  storageBucket: "chat-next-js.appspot.com",
  messagingSenderId: "204449618953",
  appId: "1:204449618953:web:a84aba4117ff4d39a0acd8",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    // if (typeof window !== "undefined") {
    //   if ("measurementId" in clientCredentials) {
    //     firebase.analytics();
    //     firebase.performance();
    //   }
    // }
    console.log("Firabase was successfull init");
  }
}
