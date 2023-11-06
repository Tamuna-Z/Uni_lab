import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from"react-router-dom";
import { useState } from "react";
import {
  Icon,
  ContentWrapper,
  Title,
  GetStarted,
  LandingContainer,
  WhiteImage,
} from "../styledcomponents/Landing.styled";
import image from "../assets/pen.png";
import bgImage from "../assets/stars.png";

function Landing() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/authorization");
  };
  
  return (
    <LandingContainer style={{ backgroundImage: `url(${bgImage})` }}>
      {/* <WhiteImage src={bgImage} alt="white bg image" /> */}
      <ContentWrapper>
        <Icon src={image} alt="icon" />
        <Title>Get Started Today</Title>
        <Link to="/authorization">
          <GetStarted onClick={handleGetStartedClick}>Get Started</GetStarted>
        </Link>
      </ContentWrapper>
    </LandingContainer>
  );
}

export default Landing;
