import React from "react";
import styled from "styled-components";
import {Card} from "semantic-ui-react";
import axios from 'axios';


const StyleCard = styled(Card) `
font-size: 1.2 rem;
display:flex;
justify-content: flex-start;
margin: 1% 14%;
border: 1px solid black;
border-radius: 5px;
padding: 1%;
width: 60%;
box-shadow: 2px 4px grey;

`
const UserCardScore = styled.div`
display: flex;
flex-direction: column;
width: 40%;
margin: 0;`


export default  function UserCard(props) {

  console.log(props)
  return (
  <StyleCard>
    <UserCardScore>
    <img src="" height="100px" width="100" />
    <h3>{props.username}</h3>
    <p>{props.email}</p>
    </UserCardScore>
    <UserCardScore>
    <h1>Score: </h1>
    <p>Top Habits: </p>
    </UserCardScore>
  </StyleCard>
  )
}
