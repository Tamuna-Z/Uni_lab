import React from "react";
import {
  FilterWrapper,
  SearchWrapper,
  PopUpTitle,
  ActiveBox,
  InactiveBox,
  PopWindow,
  CheckBox,
} from "../styledcomponents/Filter.styled";
import icon from "../assets/filter.png";
import { useState } from "react";
import searchIcon from "../assets/search.png";
import check from "../assets/check.png";
import vector from "../assets/vector.png";

function Filter() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  // const [activeChecked, setActiveChecked] = useState(false);
  // const [inactiveChecked, setInactiveChecked] = useState(false);

  // const handleActiveCheckboxChange = () => {
  //   setActiveChecked(!activeChecked);
  //   handleFilterChange(activeChecked, !activeChecked); // Pass the filter state to the parent
  // };

  // const handleInactiveCheckboxChange = () => {
  //   setInactiveChecked(!inactiveChecked);
  //   handleFilterChange(!inactiveChecked, inactiveChecked); // Pass the filter state to the parent
  // };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    // FilterBox
    <div style={{ position: "relative" }}>
      <img
        src={icon}
        alt="filterIcon"
        style={{
          position: "absolute",
          top: "35px",
          left: "380px",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={togglePopup}
      />

      <div style={{ display: "flex" }}>
        <FilterWrapper placeholder="Filter" type="text" dir="rtl" />

        {/* SearchBox */}
        <SearchWrapper type="text" dir="rtl" />
        <div style={{ position: "relative" }}>
          <img
            src={searchIcon}
            alt="SearchIcon"
            style={{
              position: "absolute",
              top: "151px",
              left: "1430px",
              zIndex: "1",
              cursor: "pointer",
              color: "red",
            }}
          />
        </div>
      </div>

      {/* when I click ,pop up displays */}
      {isPopupOpen && (
        <PopWindow>
          <div>
            <img
              src={vector}
              alt="vector icon"
              style={{ position: "absolute", top: "47px", left: "15px" }}
            />
            <PopUpTitle>სტუდენტის სტატუსი</PopUpTitle>
          </div>

          <ActiveBox>
            <CheckBox
              // checked={activeChecked}
              // onChange={handleActiveCheckboxChange}
            >
              <img
                src={check}
                alt="check icon"
                style={{ position: "absolute", top: "3px", left: "3px" }}
              />
            </CheckBox>
            Active
          </ActiveBox>

          <ActiveBox>
            <CheckBox
              // checked={inactiveChecked}
              // onChange={handleInactiveCheckboxChange}
            >
              <img
                src={check}
                alt="check icon"
                style={{ position: "absolute", top: "3px", left: "3px" }}
              />
            </CheckBox>
            InActive
          </ActiveBox>

          <div>
            <img
              src={vector}
              alt="vector icon"
              style={{ position: "absolute", top: "138px", left: "15px" }}
            />
            <PopUpTitle style={{ marginTop: "0" }}>სქესი</PopUpTitle>
          </div>
        </PopWindow>
      )}
    </div>
  );
}

export default Filter;
