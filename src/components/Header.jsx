import React from "react";
import { useState } from "react";
import {
  StyledHeader,
  LiStyle,
  NavStyle,
  FormLogo,
  Wrapper,
  HeaderPhoto,
  Image,
  PopUpWrapper,SignOutButton,CloseSign
} from "../styledcomponents/header.styled";

function Header({ selectedFile, formError }) {
  const name = localStorage.getItem("userName");
  const photo = localStorage.getItem("uploadedFile");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              {photo && (
                <HeaderPhoto onClick={openModal}>
                  <Image src={photo} alt="User Photo"  />
                </HeaderPhoto>
              )}
            </ul>
          </NavStyle>
        </StyledHeader>
      </Wrapper>

      {isModalOpen && (
        <PopUpWrapper>
          <div >
            <CloseSign onClick={closeModal}>
              &times;
            </CloseSign>
           
            <Image src={photo} alt="User Photo"  style={{ maxWidth: '30px', maxHeight: '30px', margin:'20px 50px ' }}/>

            <SignOutButton>sign out</SignOutButton>
            
          </div>
        </PopUpWrapper>
      )}

      
    </>
  );
}

export default Header;
