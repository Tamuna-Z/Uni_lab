import React from "react";
import Header from "../components/Header";
import StudentsData from "../components/StudentsData";
import { FormWrapper } from "../styledcomponents/Form.styled";
import Filter from "../components/Filter";
import { useNavigate } from 'react-router-dom'; 

function Form() {
  const navigate = useNavigate();
  return (
    <>
      <FormWrapper>
        <Header navigate={navigate} />
        <Filter />
        <StudentsData />
      </FormWrapper>
    </>
  );
}

export default Form;
