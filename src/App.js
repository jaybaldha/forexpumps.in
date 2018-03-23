import React, { Component } from "react";
import leftLogo from "./ForexLogo1.png";
import "./App.css";
import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";
import rightLogo from "./ForexLogo2.png";

const StyledBody = styled.body`
  background-color: rgba(0, 0, 255, 0.3);
`;
const StyledLeftLogo = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 200px;
  height: 55px;
  margin-left: 18%;
  margin-top: 2%;
  background-color: lightblue;
`;
const StyledRightLogo = styled.img`
  background-color: lightblue;
  width: 200px;
  height: 55px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 32%;
  margin-top: 2%;
  padding: 5px;
`;
const StyledNavUl = styled.ul`
  list-style-type: none;
  overflow: hidden;
  background-color: #333;
  width: 100%;
`;
const StyledNavLi = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;
const Theme = {
  main: "mediumseagreen"
};

class App extends Component {
  render() {
    return (
      <StyledBody>
        <StyledLeftLogo src={leftLogo} />
        <StyledRightLogo src={rightLogo} />
        <StyledNavUl>
          <StyledNavLi>Home</StyledNavLi>
          <StyledNavLi>About Us</StyledNavLi>
          <StyledNavLi>Products</StyledNavLi>
          <StyledNavLi>Inquiry</StyledNavLi>
          <StyledNavLi>Contact Us</StyledNavLi>
        </StyledNavUl>
      </StyledBody>
    );
  }
}

export default App;
