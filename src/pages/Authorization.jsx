import React from "react";
import UploadPhoto from "../components/UploadPhoto";

function Authorization({ setIsUserAuthorized }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "1920px",
        height: "1080px",
        padding: "200px",
      }}
    >
      <UploadPhoto setIsUserAuthorized={setIsUserAuthorized} />
    </div>
  );
}

export default Authorization;
