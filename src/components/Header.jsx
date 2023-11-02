import React from 'react';
import {StyledHeader} from "../styledcomponents/header.styled"

 function Header() {
  return (
    <>
    <StyledHeader>
    <nav>
      <ul>
        <li>Form</li>
        {/* your name */}
        <li>{}</li>
        {/* api */}
        <li>{}</li>
        {/* photo */}
        <li>{}</li>
      </ul>
    </nav>
    </StyledHeader>
    </>
  )
}

export default Header