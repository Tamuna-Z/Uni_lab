import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Icon,ContentWrapper,Title,GetStarted,LandingContainer,WhiteImage} from "../styledcomponents/Landing.styled";
import image from "../assets/pen.png"
import bgImage from "../assets/stars.png"



function Landing() {
  return (
    <LandingContainer >
      <WhiteImage src={bgImage} alt="white bg image"/>
   <ContentWrapper>
    {/* <Background/> */}
    <Icon src={image} alt="icon" />
   <Title>Get Started Today</Title>
    <Link to="/authorization">
      
        <GetStarted >Get Started</GetStarted>
        
      </Link>
   </ContentWrapper>
    </LandingContainer>
  )
}

export default Landing