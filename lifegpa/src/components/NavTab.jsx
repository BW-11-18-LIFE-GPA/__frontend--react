import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavBarDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
color: white;
height: 3rem;
background: #d3a1f5;
padding-left: 10%;`

const StyledLink = styled(Link)`
    text-decoration: none;`

const NavA = styled.a`
color: #2e343b;
text-decoration: none !important;
font-size: 1.2rem;
font-weight: 300;
margin: 0 5%;
&:hover {
    transition-property: color;
    color: #6b6b6b;
}`

const LogButton = styled.button`
    background: white;
    height: 2.5rem;
    width: 5rem;
    text-align: center;
    font-size: 1rem;
    min-width: 5rem;
    line-height: 3rem;
    border-radius: 5px;
    color: #FFF;
    transition-duration: 300ms;
    &:hover {
        transition-property: background, color;
        background: yellow;
        color: red;      
    }`


export default function NavTab() {
    return (
        <NavBarDiv>
            <NavA href="https://lifegpa-lambda.netlify.com/index.html">Home</NavA>
            <NavA href="https://lifegpa-lambda.netlify.com/about.html">About</NavA>
            <NavA><StyledLink to="/users">Find Friends</StyledLink></NavA>
            <NavA><StyledLink to="/dashboard">Dashboard</StyledLink></NavA>
            <NavA><LogButton><StyledLink to="/register">Register</StyledLink></LogButton>
            <LogButton><StyledLink to="/login">Login</StyledLink></LogButton></NavA>
        </NavBarDiv>
      )
};