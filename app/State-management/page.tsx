"use client"

import { useState } from "react";



export default function Formj (){
   const [data,setData]= useState("")

   function handleTextChange (e:any){
    return setData(e.target.value)
 }

   return(
    <form className="bg-black flex flex-col justify-center items-center h-screen">
      <textarea
      value={data} 
      onChange={handleTextChange}
      />
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Submit</button>
    </form>
   )
} 