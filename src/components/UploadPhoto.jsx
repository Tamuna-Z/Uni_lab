import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import {
  AuthorizationContainer,
  Title,
  PhotoWrapper,
  IconWrapper,
  Upload,
  FillName,
  SignIn,
} from "../styledcomponents/UploadPhoto.styled";
import icon from "../assets/addPhoto.png";

function UploadPhoto({ setIsUserAuthorized }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const memoizedSetIsUserAuthorized = useMemo(
    () => setIsUserAuthorized,
    [setIsUserAuthorized]
  );

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Create a new FileReader to read the selected file
      const reader = new FileReader();

      reader.onload = (event) => {
        // The file content is available in event.target.result
        const fileContent = event.target.result;

        // I can store the file content in local storage
        localStorage.setItem("uploadedFile", fileContent);

        console.log("File uploaded and stored locally.");
      };

      // selected file as a data URL
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile && name) {
      localStorage.setItem("userName", name);
      localStorage.setItem("file", selectedFile);
      setFormError("");
      memoizedSetIsUserAuthorized(true);
      navigate("/form");
    } else {
      setFormError("Please fill in both the photo and name fields.");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (selectedFile && name) {
      localStorage.setItem("userName", name);
      localStorage.setItem("file", selectedFile);
      setFormError("");
      handleUpload(); // Call handleUpload when signing in
      memoizedSetIsUserAuthorized(true);
      navigate("/form");
    } else {
      setFormError("Please fill in both the photo and name fields.");
    }
  };
  // Use the 'useEffect' hook to retrieve the name from localStorage on component initialization
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthorizationContainer>
        <Title>Get Started</Title>
        <div>
          <h2>add a Photo</h2>
          <PhotoWrapper>
            <IconWrapper>
              <img src={icon} alt="Icon" />

              <Upload
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </IconWrapper>
          </PhotoWrapper>
          <h3 style={{ padding: "12px", display: "inline-block" }}>
            Fill in your name
          </h3>
        </div>
        <div>
          <form onSubmit={handleSignIn}>
            <FillName
              type="text"
              placeholder="Your Name"
              value={name} // Bind the input value to the 'name' state
              onChange={handleNameChange} // Handle input changes
            />
            <div>
              <SignIn type="submit">Sign in</SignIn>
            </div>
          </form>
          {formError && <p style={{ color: "red" }}>{formError}</p>}
        </div>
      </AuthorizationContainer>
    </div>
  );
}

export default UploadPhoto;
