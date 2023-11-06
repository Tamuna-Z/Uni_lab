import React from "react";
import { FilterWrapper} from "../styledcomponents/Filter.styled";
import icon from "../assets/filter.png";
import { useState } from "react";

function Filter() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div style={{ position: "relative" }}>
      <img
        src={icon}
        alt="filterIcon"
        style={{
          position: "absolute",
          top: "35px",
          left: "40px",
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={togglePopup}
      />
      <FilterWrapper placeholder="Filter" type="text" dir="rtl" />
      {isPopupOpen && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            left: '20px',
            width: '200px',
            height: '200px',
            backgroundColor: 'white',
            zIndex: '1',
          }}
        >
          <div>
            <h2>სტუდენტის სტატუსი</h2>
          </div>
          <div>
            <h2>სქესი</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;


