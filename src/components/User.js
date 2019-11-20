import React from "react";
import { Paper, Container, Typography as Font, Card } from "@material-ui/core";

 function User({user}){
    const { name, userPic } = user;

    return (
        <Card elevation={4}>
          <Font variant="h3">@{name}</Font>
          <img src={userPic} height="300px" width="100%" />
        </Card>
    );
}
export default User;
