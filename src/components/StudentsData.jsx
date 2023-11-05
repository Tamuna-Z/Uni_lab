import React from "react";
import { Wrapper, DataLi } from "../styledcomponents/StudentsData.styled";
import studentsData from "./data";
import { useState } from "react";

function StudentsData() {
 
  // const[item,setItem]=useState(StudentsData);
  const studentsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(studentsData.length / studentsPerPage);

  // Function to set the current page
  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Wrapper>
        <ul>
          <li>
            მოსწავლის სახელი <br /> და გვარი
          </li>
          <li>სტატუსი</li>
          <li>სქესი</li>
          <li>ქულები</li>
          <li>პირადი ნომერი</li>
          <li>მეილი</li>
          <li>მობილურის ნომერი</li>
          <li>მისამართი</li>
          <li>დაბადების თარიღი</li>
        </ul>

        {currentStudents.map((student) => (
          <ul key={student.id}>
            <DataLi key={student.id}>{student.name}</DataLi>
            <li >{student.status}</li>
            <li >{student.gender}</li>
            <li >{student.id}{student.idNumber}</li>
            <li >{student.email}</li>
            <li >{student.mobileNumber}</li>
            <li >{student.address}</li>
          </ul>
        ))}

<div>
          {/* {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )} */}
        </div>

       
      </Wrapper>
    </>
  );
}

export default StudentsData;
