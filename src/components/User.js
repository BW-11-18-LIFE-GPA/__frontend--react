import React from "react";
import { Paper, Container, Typography as Font, Card } from "@material-ui/core";
import UserAttr from "./UserAttr";

function User({ user, userAttr }) {
  const { name, userPic } = user;
  return (
    <Card elevation={4}>
      <Font variant="h3">@{name}</Font>
      <img src={userPic} height="300px" width="100%" />
      <UserAttr userAttr={userAttr}/>
    </Card>
  );
}
export default User;
