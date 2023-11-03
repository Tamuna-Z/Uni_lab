import React from "react";
import Header from "../components/Header";
import StudentsData from "../components/StudentsData";
import { FormWrapper } from "../styledcomponents/Form.styled";
import Filter from "../components/Filter";

function Form() {
  return (
    <>
      <FormWrapper>
        <Header  />
        <Filter />
        <StudentsData />
      </FormWrapper>
    </>
  );
}

export default Form;
