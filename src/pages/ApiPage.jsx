import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';

function ApiPage() {
  const [dateItem,setDateItem]=useState([]);

  useEffect(()=>{
    const requestUser=async()=>{
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data =response.data;
      setDateItem(data);
    };

    requestUser();
  },[]);
  return (
    <>
    <div>{dateItem.map((user)=>(
      <div>
        <div key={user.id}>{user.title}</div>
      <div key={user.id}>{user.body}</div>
      </div>

    ))}</div>
    </>
  )
}

export default ApiPage