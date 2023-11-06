import React from "react";
import { FilterWrapper,SearchWrapper,PopUpTitle,ActiveBox,InactiveBox} from "../styledcomponents/Filter.styled";
import icon from "../assets/filter.png";
import { useState } from "react";
import searchIcon from "../assets/search.png";
import arrow from "../assets/group.png";
import vector from "../assets/vector.png";

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
          left: "380px",
          zIndex: '1',
          cursor: 'pointer',
        }}
        onClick={togglePopup}
      />
      


      <div style={{display:'flex'}}>
      <FilterWrapper placeholder="Filter" type="text" dir="rtl" />
      <SearchWrapper type="text" dir="rtl" />
      </div>

      <div style={{ position: "relative" }}>
      <img
        src={searchIcon}
        alt="SearchIcon"
        style={{
          position: "absolute",
          top: "35px",
          left: "1315px",
          zIndex: '1',
          cursor: 'pointer',
        }}/>

      </div>
      {isPopupOpen && (
        <div
          style={{
            position: 'absolute',
            top: '95px',
            left: '60px',
            width: '297px',
            height: '296px',
            backgroundColor: 'white',
            zIndex: '1',
          }}
        >
          <div>
            <img src={vector} alt="vector icon"  style={{position:'absolute',top:'47px',left:'15px'}}/>
            <PopUpTitle>სტუდენტის სტატუსი</PopUpTitle>
          </div>
          
          <ActiveBox>
            <img src={arrow} alt="arrow icon" />
          </ActiveBox>
          <InactiveBox>
            <img src={arrow} alt="arrow icon" />
          </InactiveBox>

          <div>
          <img src={vector} alt="vector icon"  style={{position:'absolute',top:'138px',left:'15px'}}/>
            <PopUpTitle style={{marginTop:'0'}}>სქესი</PopUpTitle>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default Filter;


