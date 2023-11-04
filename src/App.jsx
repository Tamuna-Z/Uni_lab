import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Authorization from "./pages/Authorization";
import Form from "./pages/Form";
import Api_page from "./pages/Api_page";
import { Routes, Route , Navigate} from "react-router-dom";
import { GlobalStyled } from "./styledcomponents/Global.styled";
import { useNavigate } from "react-router-dom";
import ApiPage from "./pages/ApiPage";

function App() {
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  return (
    <>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/authorization"
          element={<Authorization setIsUserAuthorized={setIsUserAuthorized} />}
        />
        <Route
          path="/form"
          element={
            isUserAuthorized ? (
              <Form  setIsUserAuthorized={setIsUserAuthorized}/>
            ) : (
              <Navigate to="/authorization" replace />
            )
          }
        />
        <Route
          path="/api"
          element={
            isUserAuthorized ? (
              <ApiPage setIsUserAuthorized={setIsUserAuthorized}/>
            ) : (
              <Navigate to="/api" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
