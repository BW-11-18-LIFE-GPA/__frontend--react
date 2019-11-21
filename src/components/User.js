import React from "react";
import { Paper, Container, Typography as Font, Card } from "@material-ui/core";
import UserAttr from "./UserAttr";

function User({ user, userAttr, handleSubmit, handleChange }) {
  const { name, userPic } = user;
  return (
    <Card elevation={4} style={style.card}>
      <Font variant="h3" align="center">
        @{name}
      </Font>
      <img src={userPic} height="300px" width="100%" />
      <UserAttr
        userAttr={userAttr}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
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
