import React from 'react';
import {Wrapper} from "../styledcomponents/StudentsData.styled";

function StudentsData() {
  return (
    <Wrapper>
      <div>
        <ul>
          <li>მოსწავლის სახელი და გვარი</li>
          <li>სტატუსი</li>
          <li>სქესი</li>
          <li>ქულები</li>
          <li>პირადი ნომერი</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default StudentsData