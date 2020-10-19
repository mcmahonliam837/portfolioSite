import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { FirebaseContext } from "../FirebaseContext";

interface Props {
  children?: any;
}

export default (props: Props) => {
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
    return <Redirect to="/login" />;
  } else {
    return <div>{props.children}</div>;
  }
};
