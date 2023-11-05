import React from 'react';
import {} from "../styledcomponents/MakingPage.styled"

function MakingPages({totalPosts,postsPerPage, setCurrentPage}) {
    let pages=[];
        for (let i =1; i<=Math.ceil( totalPosts/postsPerPage);i++){
            pages.push(i);
        }
  return (
    <div>
        {pages.map((page, index) => (
        <button style={{width:'30px',height:'30px'}}
          key={`page_${index}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default MakingPages



