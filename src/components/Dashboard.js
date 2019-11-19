import React, { Component } from "react";
import { Card, Container, Grid, Paper } from "@material-ui/core";

import User from "./User"
import Habits from './Habits'
import randomGuyPic from "../assets/img/randomguy.jpg";

const axios = require('axios')

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                name: "Some Random Guy",
                username: "randomdude",
                userPic: randomGuyPic,
            },
            habit:[]
        };
    }
    async componentDidMount(){
        const res = await axios.get('https://life-gpa-lambda.herokuapp.com/api/users') 
        const userEx = res.data.find(user => user.id === 2);
        this.setState((prevState) => ({
            user:{
                ...prevState.user,
                username:userEx.username,
                id:userEx.id
            }
        }
        ))

        const res2 = await axios.get('https://life-gpa-lambda.herokuapp.com/api/habits',{
            params:{
                user_id: this.state.user.id
            }
        }) 
        const habits = res2.data;
        console.log(habits);

        this.setState((prevState)=>({
            habit:habits
        })
        )
    }
  render() {
    return (
      <Grid container>
        <Grid item xs={5}>
          <User user ={this.state.user}/>
        </Grid>
        <Grid item xs={7}>
            <Habits habits={this.state.habit}/>
        </Grid>
      </Grid>
    );
  }
}
export default Dashboard;
