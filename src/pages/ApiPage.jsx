import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CardWrapper, CardContainer,PagingWrapper } from "../styledcomponents/ApiPage.styled";
import Header from "../components/Header";
import MakingPages from "../components/MakingPages";

function ApiPage() {
  const [dateItem, setDateItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  useEffect(() => {
    const requestUser = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data;
      setDateItem(data);
    };

    requestUser();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dateItem.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <Header />
      <CardContainer dataItem={currentPosts}>
        {currentPosts.map((user, index) => (
          <CardWrapper key={user.id}>
            <div key={index}>{user.title}</div>
            <div key={index}>{user.body}</div>
          </CardWrapper>
        ))}

        <PagingWrapper >
          <MakingPages
            totalPosts={dateItem.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </PagingWrapper>
      </CardContainer>
    </>
  );
}

export default ApiPage;
