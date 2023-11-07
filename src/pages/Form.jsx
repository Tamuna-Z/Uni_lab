import React from "react";
import Header from "../components/Header";
import StudentsData from "../components/StudentsData";
import { FormWrapper } from "../styledcomponents/Form.styled";
import Filter from "../components/Filter";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(false);
  const [inactiveFilter, setInactiveFilter] = useState(false);

  const handleFilterChange = (active, inactive) => {
    setActiveFilter(active);
    setInactiveFilter(inactive);
  };
  return (
    <>
      <FormWrapper>
        <Header navigate={navigate} />
        <Filter handleFilterChange={handleFilterChange} />
        <StudentsData activeFilter={activeFilter} inactiveFilter={inactiveFilter} />
      </FormWrapper>
    </>
  );
}

export default Form;
