import React from "react";
import { Wrapper, DataLi } from "../styledcomponents/StudentsData.styled";
import studentsData from "./data";

function StudentsData() {
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
          <ul>
            <DataLi key={student.id}>{student.name}</DataLi>
            <li key={student.id}>{student.status}</li>
            <li key={student.id}>{student.gender}</li>
            <li key={student.id}>{student.idNumber}</li>
            <li key={student.id}>{student.email}</li>
            <li key={student.id}>{student.mobileNumber}</li>
            <li key={student.id}>{student.address}</li>
          </ul>
        ))}
      </Wrapper>
    </>
  );
}

export default StudentsData;
