import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';
import {CardWrapper,CardContainer} from "../styledcomponents/ApiPage.styled";
import Header from "../components/Header";

function ApiPage() {
  const [dateItem,setDateItem]=useState([]);

  useEffect(()=>{
    const requestUser=async()=>{
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data =response.data;
      setDateItem(data);
    };

    requestUser();
  },[]);
  return (
    <>
    <Header/>
    <CardContainer>{dateItem.map((user)=>(
      <CardWrapper>
        <div key={user.id}>{user.title}</div>
      <div key={user.id}>{user.body}</div>
      </CardWrapper>

    ))}</CardContainer>
    </>
  )
}

export default ApiPage