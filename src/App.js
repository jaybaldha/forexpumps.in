import React, { Component } from "react";
import leftLogo from "./ForexLogo1.png";
import "./App.css";
import theme from "styled-theming";
import styled, { ThemeProvider } from "styled-components";
import rightLogo from "./ForexLogo2.png";

const StyledBody = styled.body`
  padding: 15px;
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

class App extends Component {
  render() {
    return (
      <StyledBody>
        <StyledLeftLogo src={leftLogo} />
        <StyledRightLogo src={rightLogo} />
      </StyledBody>
    );
  }
}

export default App;
