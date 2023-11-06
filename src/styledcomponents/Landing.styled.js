import styled from "styled-components";
 export const LandingContainer=styled.div`
 width:1920px;
 height:1080px;
 background-color: black; 
 position: relative; 
 /* background-image:url(../assets/stars.png); */


 `
 export const WhiteImage=styled.img`
 position:absolute;
 top:0;
 left:0;
 right:0;
 bottom:0;
 height:100%;
 width:100%;
 `

export const ContentWrapper = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
 
`;

export const Icon =styled.img`
width:164px;
height:166px;
margin-top:216px;
margin-bottom:52px;

`

export const Title=styled.h1`
width:1090px;
height:212px;
text-align:center;
padding-top:70px;
color:#4980C0;
line-height:119.23px;
font-weight:400px;
font-size: 96px;
margin-bottom:52px;
`
export const GetStarted=styled.button`
width:395px;
height:79px;
border-radius:7px;
background-color:#4980C0;
color:white;
text-align:center;
font-size:40px;
`