import React from "react";
import styled from "styled-components";
import {Card} from "semantic-ui-react";

const StyleCard = styled(Card) `
font-size: 1.2 rem;
display:flex;
justify-content: flex-start;
align-items: center;
margin: 5%;
border: 1px solid black;
border-radius: 5px;
padding: 1%;
width: 40%;

`


export default function UserCard(props) {
  console.log(props)
  return (
  <StyleCard>
    <div>
    <h3>{props.username}</h3>
    <p>{props.email}</p>
    <p>{props.habits}</p>
    </div>
  </StyleCard>
  )
}
