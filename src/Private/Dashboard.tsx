import React, { useContext } from "react";
import AuthRequired from "./AuthRequired";
import { withRouter } from "react-router";
import { FirebaseContext } from "FirebaseContext";

export default withRouter((props) => {
  const firebase = useContext(FirebaseContext);

  return (
    <AuthRequired>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: 500,
            borderRadius: 10,
            borderStyle: "solid",
            borderColor: "#383838",
            padding: 25,
          }}
        >
          <button
            onClick={() => {
              props.history.push("/agenda");
            }}
          >
            Agenda
          </button>
          <button
            onClick={() => {
              props.history.push("/degree-progress");
            }}
          >
            Degree Progress
          </button>
          <button
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              firebase?.auth
                .signOut()
                .then(() => {
                  props.history.push("/");
                })
                .catch((err) => console.error(err));
            }}
          >
            signout
          </button>
        </div>
      </div>
    </AuthRequired>
  );
});
