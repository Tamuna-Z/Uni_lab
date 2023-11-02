import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Authorization from "./pages/Authorization";
import Form from "./pages/Form";
import Api_page from "./pages/Api_page";
import { Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./styledcomponents/Global.styled";

function App() {
  return (
    <>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
