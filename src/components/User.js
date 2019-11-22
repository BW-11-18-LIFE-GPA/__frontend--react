import React from "react";
import { Typography as Font, Card, Grid } from "@material-ui/core";
import UserAttr from "./UserAttr";
import Gpa from "./Gpa";

function User({ user, userAttr, handleSubmit, handleChange, gpa }) {
  const { name, userPic } = user;
  return (
    <Card elevation={4} style={style.card}>
      <Font variant="h3" align="center">
        @{name}
      </Font>
      <br />
      <img src={userPic} height="300px" width="100%" />
      <br />
      <br />
      <UserAttr
        userAttr={userAttr}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Gpa gpa={gpa} />
    </Card>
  );
}

const style = {
  card: {
    paddingTop: "20px",
    paddingBottom: "20px"
  }
};
export default User;
