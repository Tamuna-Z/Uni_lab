import styled from "styled-components";
export const Wrapper=styled.div`
background-color:black;
`
export const StyledHeader=styled.header`
/* width:1201px; */
height:120px;
display:flex;
justify-content:space-between;
align-items:center;
padding:62px 35px ;
border-bottom:1px solid #EBEBEB;
`
export const FormLogo = styled.h2`
width:111px;
height:49px;
color:white;
font-size:40px;
font-weight:700px;
`
export const LiStyle=styled.li`
margin:50px;
color:white;
width:85px;
height: 35px;
line-height:35px;
font-size:35px;
font-weight:700px;
`
export const NavStyle=styled.nav`
display:flex;
`
// export const ApiDiv=styled.div`
// width:30px;
// height:20px;
// background-color:white;
// line-height:24px;
// margin:15px;
// `
export const HeaderPhoto=styled.div`
position: relative;
width:80px;
height:80px;


`

export const Image =styled.img`
width:100%;
height:100%;
margin:27px 20px 20px 20px;
position:absolute;
top:0;
left:0;
object-fit:cover;
border-radius:50%;
`
export const PopUpWrapper=styled.div`
background-color:white;
width:150px;
height:150px;
position: fixed;
 top: 70px;
 right: 5px;

`

// export const SignOutButton=styled.button`
// margin: 80px 40px;
// `
export const CloseSign=styled.span`
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          color: red;
          font-size: 24px;
`

export const SignOutButton=styled.button`
width: 60px;
height:30px;
background-color:grey;
margin:60px 40px;

`
