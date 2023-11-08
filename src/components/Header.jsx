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
import { useNavigate } from "react-router-dom";

function Header({ setSelectedFile, setIsUserAuthorized }) {
  const name = localStorage.getItem("userName");
  const photo = localStorage.getItem("uploadedFile");
  console.log("userName:", name);
  console.log("uploadedFile:", photo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleSignOut = (e) => {
  //   e.preventDefault();

  //   // Clear the stored data in localStorage
  //   localStorage.removeItem("userName");
  //   localStorage.removeItem("uploadedFile");
  //   navigate("/landing");
  //   setIsUserAuthorized(false);
  // };

  return (
    <>
      <Wrapper>
        <StyledHeader>
          <FormLogo>Form</FormLogo>
          <NavStyle>
            <ul>
              <LiStyle onClick={() => navigate("/api")}>api</LiStyle>
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

            <SignOutButton >Sign out</SignOutButton>
          </div>
        </PopUpWrapper>
      )}
    </>
  );
}

export default Header;
