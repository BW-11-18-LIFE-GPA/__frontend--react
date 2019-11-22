import React from "react";
import { Typography as Font } from "@material-ui/core";

export default function Gpa({ gpa }) {
  const style = {
    gpa: {
      color: (function() {
        return gpa < 7 ? "red" : "green";
      })()
    }
  };
  return (
    <>
      <Font variant="h4" align="center">
        Overall Grade:
      </Font>
      <Font style={style.gpa} variant="h2" align="center">
        {gpa}
      </Font>
    </>
  );
}
