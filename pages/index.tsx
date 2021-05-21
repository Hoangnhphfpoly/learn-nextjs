import React from "react";
import initFirebase from "../firebase/initFirebase";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import "firebase/auth";
import "firebase/firestore";
import ChatRoom from "../components/ChatRoom";

const Home: React.FC = () => {
  initFirebase();
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {user ? (
        <>
          <nav id="sign_out">
            <h2>Chat With Friends</h2>
            <button onClick={signOut}>Sign Out</button>
          </nav>

          <ChatRoom user={user} db={db} />
        </>
      ) : (
        <section id="sign_in">
          <h1>Welcome to Chat Room</h1>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </section>
      )}
    </div>
  );
};

export default Home;
