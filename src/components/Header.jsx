import React from 'react';
import {StyledHeader,LiStyle,NavStyle,FormLogo,Wrapper} from "../styledcomponents/header.styled"

 function Header({selectedFile,formError}) {
  const name = localStorage.getItem('userName');
  const photo = localStorage.getItem('uploadedFile');
  return (
    <>
    <Wrapper>
    <StyledHeader>
    
    <FormLogo>Form</FormLogo>
    <NavStyle>
    <ul>
     {name && <LiStyle>{name}</LiStyle>}
      
      {/* api */}
      <LiStyle>api</LiStyle>
      {photo && <LiStyle><img src={photo} alt="User Photo" /></LiStyle>}
      
    </ul>
  </NavStyle>
  </StyledHeader>
    </Wrapper>
    </>
  )
}

export default Header