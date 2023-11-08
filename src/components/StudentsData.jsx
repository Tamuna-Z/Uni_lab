import React from "react";
import { Wrapper, DataLi } from "../styledcomponents/StudentsData.styled";
import studentsData from "./data";
// import { useState } from "react";

function StudentsData(){
  // activeFilter,
  // inactiveFilter,
  // currentPage,
  // setCurrentPage,
  // handlePageChange, {
  // const studentsPerPage = 10;
  // const indexOfLastStudent = currentPage * studentsPerPage;
  // const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  // const currentStudents = studentsData.slice(
  //   indexOfFirstStudent,
  //   indexOfLastStudent
  // );
  // const totalPages = Math.ceil(studentsData.length / studentsPerPage);

  // Function to set the current page
  // const setPage = (page) => {
  //   setCurrentPage(page);
  // };

  // const filteredStudents = studentsData.filter((student) => {
  //   if (activeFilter && student.status === "Active") {
  //     return true;
  //   }
  //   if (inactiveFilter && student.status === "Inactive") {
  //     return true;
  //   }
  //   return !activeFilter && !inactiveFilter; // Show all if no filters are checked
  // });
  const generateKey = (student) => {
    return `${student.name}-${student.id}`;
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

        {studentsData.map((student) => {
          return (
            <ul key={generateKey(student)}>
              <DataLi key={student.id}>{student.name}</DataLi>
              <li>{student.status}</li>
              <li>{student.gender}</li>
              <li>
                {student.id}
                {student.idNumber}
              </li>
              <li>{student.email}</li>
              <li>{student.mobileNumber}</li>
              <li>{student.address}</li>
            </ul>
          );
        })}

        {/* <ul>
          {filteredStudents.map((student) => (
            <ul key={generateKey(student)}>
              <li>{student.name}</li>
              <li>{student.status}</li>
              <li>{student.gender}</li>
            </ul>
          ))}
        </ul> */}
      </Wrapper>
    </>
  );
}

export default StudentsData;
