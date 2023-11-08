import React from "react";
import Header from "../components/Header";
import StudentsData from "../components/StudentsData";
import { FormWrapper } from "../styledcomponents/Form.styled";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  // const [activeFilter, setActiveFilter] = useState(false);
  // const [inactiveFilter, setInactiveFilter] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  // const handleFilterChange = (active, inactive) => {
  //   setActiveFilter(active);
  //   setInactiveFilter(inactive);
  // };
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
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
