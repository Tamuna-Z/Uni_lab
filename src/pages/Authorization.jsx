import React from 'react'
import UploadPhoto from '../components/UploadPhoto';


function Authorization({setIsUserAuthorized}) {
  
  return (
    <div style={{backgroundColor:'black', width:'884px', height:'984px'}}>
   <UploadPhoto setIsUserAuthorized={setIsUserAuthorized}/>
    </div>
  )
}

export default Authorization