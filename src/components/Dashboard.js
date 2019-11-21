import React, { Component } from "react";
import { Card, Container, Grid, Paper } from "@material-ui/core";

import User from "./User";
import Habits from "./Habits";
import randomGuyPic from "../assets/img/randomguy.jpg";

const axios = require("axios");

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userPic: randomGuyPic
      },
      habit: [],
      userAttr:{
          gender:'unknown',
          age:'unknown',
          nationality:'unknown',
          bio:'unknown'
      }
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      "https://life-gpa-lambda.herokuapp.com/api/users"
    );
    const userEx = res.data.find(user => user.id === 2);
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        name: userEx.username,
        id: userEx.id
      }
    }));

    //Valid For 24 Hours
    const key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImptamxlcyIsImlhdCI6MTU3NDE5ODIyMywiZXhwIjoxNTc0Mjg0NjIzfQ.JxURRuiexwn120byf3urQYPPh3zaxbdyHQ-KMahc0ys";

    const res2 = await axios.get(
      `https://life-gpa-lambda.herokuapp.com/api/users/${this.state.user.id}/habits/`,
      {
        headers: {
          Authorization: key
        }
      }
    );

    const habits = res2.data.habits;
    this.setState(() => ({
      habit: habits
    }));
  }


  handleSubmit = (props) => {
    this.setState(({props:{gender,age,nationality,bio}})=>({
      userAttr:{
        gender,
        age,
        nationality,
        bio
      }
    }))
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={5}>
          <User user={this.state.user} userAttr={this.state.userAttr} handleSubmit={this.handleSubmit}/>
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Habits habits={this.state.habit}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;
