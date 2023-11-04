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

  // const signOut = () => {
  //   // Clear localStorage data and navigate to the landing page
  //   localStorage.removeItem("userName");
  //   localStorage.removeItem("uploadedFile");
  //   navigate("/");
  // };

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <FormLogo>Form</FormLogo>
          <NavStyle>
            <ul>
              <LiStyle onClick={() => navigate('/api')}>api</LiStyle>
              {name && <LiStyle>{name}</LiStyle>}

              {/* api */}

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

            <SignOutButton>sign out</SignOutButton>
          </div>
        </PopUpWrapper>
      )}
    </>
  );
}

export default Header;
