import React from "react";
import { Wrapper, DataLi } from "../styledcomponents/StudentsData.styled";
import studentsData from "./data";
import { useState } from "react";

function StudentsData() {
  // const studentsPerPage = 10;
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastStudent = currentPage * studentsPerPage;
  // const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  // const currentStudents = studentsData.slice(indexOfFirstStudent, indexOfLastStudent);

  // const totalPages = Math.ceil(studentsData.length / studentsPerPage);

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  const studentsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studentsData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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

        {studentsData.map((student) => (
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

        {/* <div>
        <button onClick={prevPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div> */}

        <div>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      </Wrapper>
    </>
  );
}

export default StudentsData;
