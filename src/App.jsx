import { useState } from 'react';
import './App.css';
import Landing from './pages/Landing';
import Authorization from './pages/Authorization';
import Form from './pages/Form';
import Api_page from './pages/Api_page';
import {Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
  
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/authorization" element={<Authorization />} />
      
    </Routes>

    </>
  )
}

export default App
