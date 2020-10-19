import React, { useCallback, useContext, useState } from "react";
import { FirebaseContext } from "FirebaseContext";
import { withRouter } from "react-router";

export default withRouter((props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useContext(FirebaseContext);

  const login = useCallback(async () => {
    console.log(email);
    console.log(password);
    try {
      const res = await firebase?.auth.signInWithEmailAndPassword(
        email,
        password
      );
      props.history.push("/dashboard");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
    }
  }, [email, password]);

  return (
    <div>
      <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={login}>Login</button>
    </div>
  );
});
