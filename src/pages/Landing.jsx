import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Icon,ContentWrapper,Title} from "../styledcomponents/Landing.styled";
import image from "../assets/pen.png"


function Landing() {
  return (
    <div>
   <ContentWrapper>
    <Icon src={image} alt="icon" />
   <Title>Get Started Today</Title>
    <Link to="/authorization">
        <button>Get Started</button>
      </Link>
   </ContentWrapper>
    </div>
  )
}

export default Landing