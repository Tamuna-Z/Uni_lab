import React from 'react';
import {FilterWrapper} from "../styledcomponents/Filter.styled";
import icon from "../assets/filter.png"

function Filter() {
  return (
    <div style={{position:'relative'}}>
      <img src={icon} alt="filterIcon" style={{position:'absolute',top:'35px',left:'40px'}}/>
      <FilterWrapper placeholder='Filter' type="text" dir="rtl" style={{textAlign:'center'}}/>
    </div>
  )
}

export default Filter

// style={{display:'absolute', top:'2px', right:'4px'}}