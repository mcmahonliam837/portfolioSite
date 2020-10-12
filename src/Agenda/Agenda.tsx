import React, { useContext, useEffect, useState } from "react";
import Firebase, { FirebaseContext } from "../FirebaseContext";
import Login from "./Login";

export default (props) => {
  const firebase = useContext(FirebaseContext);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return firebase?.app.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setAuth(true);
        setLoading(false);
      } else {
        // No user is signed in.
        setAuth(false);
        setLoading(false);
      }
    });
  }, [firebase]);

  if (loading) {
    return <div />;
  } else if (!auth) {
    return <Login />;
  } else {
    return (
      <div>
        <p>agenda</p>
      </div>
    );
  }
};
