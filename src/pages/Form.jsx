import React from 'react';
import Header from "../components/Header";
import StudentsData from '../components/StudentsData';
import {FormWrapper} from "../styledcomponents/Form.styled"

function Form() {
  return (
    <>
     <FormWrapper>
    <Header/>
   
    <StudentsData/>
   </FormWrapper>
  
  

    </>
  )
}

export default Form