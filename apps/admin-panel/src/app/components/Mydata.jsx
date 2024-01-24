import React, { useEffect, useState } from 'react'
import axios from "axios"

const Mydata = () => {

  const[yourdata,setyourdata]=useState([])


  useEffect(()=>{
   mydata()
  },[])

 const mydata=async()=>{
  try {
    
    const repsonse=await axios.get("http://localhost:3000/api");
    console.log(repsonse.data);
    setyourdata(repsonse.data.message)
  } catch (error) {
    console.log(error);
    
  }
 }


  return (

    <div>{yourdata}</div>
  )
}

export default Mydata