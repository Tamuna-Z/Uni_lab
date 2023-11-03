import React from 'react';
import {StyledHeader,LiStyle,NavStyle,FormLogo,Wrapper,HeaderPhoto, Image} from "../styledcomponents/header.styled"

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
      {photo && <HeaderPhoto><Image src={photo} alt="User Photo" /></HeaderPhoto>}
      
    </ul>
  </NavStyle>
  </StyledHeader>
    </Wrapper>
    </>
  )
}

export default Header