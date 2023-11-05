import React from 'react';
import {FilterWrapper} from "../styledcomponents/Filter.styled";
import icon from "../assets/filter.png"

function Filter() {
  return (
    <div style={{display:'relative'}}>
      <img src={icon} />
      <FilterWrapper placeholder='Filter'/>
    </div>
  )
}

export default Filter

// style={{display:'absolute', top:'2px', right:'4px'}}