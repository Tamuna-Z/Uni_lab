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
  PopUpWrapper,
  SignOutButton,
  CloseSign,
} from "../styledcomponents/header.styled";
import { useNavigate } from 'react-router-dom';

function Header({ selectedFile, formError }) {
  const name = localStorage.getItem("userName");
  const photo = localStorage.getItem("uploadedFile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const signOut = async () => {
    // Clear localStorage data
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("uploadedFile");
  
    // Navigate to the landing page
    navigate("/");
  };

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <FormLogo>Form</FormLogo>
          <NavStyle>
            <ul>
              <LiStyle onClick={() => navigate('/api')} >api</LiStyle>
              {name && <LiStyle>{name}</LiStyle>}

              {photo && (
                <HeaderPhoto onClick={openModal}>
                  <Image src={photo} alt="User Photo" />
                </HeaderPhoto>
              )}
            </ul>
          </NavStyle>
        </StyledHeader>
      </Wrapper>

      {isModalOpen && (
        <PopUpWrapper>
          <div>
            <CloseSign onClick={closeModal}>&times;</CloseSign>

            <Image
              src={photo}
              alt="User Photo"
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                margin: "20px 50px ",
              }}
            />

            <SignOutButton onClick={signOut}>sign out</SignOutButton>
          </div>
        </PopUpWrapper>
      )}
    </>
  );
}

export default Header;
