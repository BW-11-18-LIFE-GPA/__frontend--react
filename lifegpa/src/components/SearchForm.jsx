import React from "react";
import Styled from "styled-components";

const Input = Styled.input`
margin-left:400px;
height:40px;
width:250px;
font-size:20px;
border-radius: 10px;
`
export default function SearchForm(props) {
 
  return (
    <section className="search-form">
   <Input
        id="username"
        type="text"
        name="textfield"
        placeholder="Search people"
        value={props.query}
        onChange={props.handleChange}
      />
    </section>
  );
}