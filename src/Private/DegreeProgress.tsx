import React from "react";
import AuthRequired from "./AuthRequired";

export default (props) => {
  return (
    <AuthRequired>
      <div>DegreeProgress</div>
    </AuthRequired>
  );
};
