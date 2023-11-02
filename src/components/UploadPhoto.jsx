import React from 'react';
import { useState } from 'react';

function UploadPhoto() {
    const [selectedFile, setSelectedFile] = useState(null);

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
        
        // You can store the file content in local storage
        localStorage.setItem('uploadedFile', fileContent);
        
        console.log('File uploaded and stored locally.');
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
    } else {
      alert('Please select a file to upload.');
    }
  };
  return (
    <>
      <h1>Get Started</h1>
      <div>
        <h2>Upload a Photo</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
  

    </>
  )
}

export default UploadPhoto