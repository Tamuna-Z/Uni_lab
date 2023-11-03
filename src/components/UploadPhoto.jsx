import React from "react";
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';

function UploadPhoto() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

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
    //   alert(`Hello, ${name}!`);
    navigate('/form');
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
    <>
      <h1>Get Started</h1>
      <div>
        <h2>Upload a Photo</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name} // Bind the input value to the 'name' state
            onChange={handleNameChange} // Handle input changes
          />
          <button type="submit">Sign in</button>
        </form>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
      </div>
    </>
  );
}

export default UploadPhoto;
