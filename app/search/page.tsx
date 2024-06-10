"use client"

import React , {useState} from "react"

import Search from "./search"


const allusers = ["john","exd","wew","fer","Ter","liy","pit"]

interface GlobalSearchProps{}

const GlobalSearch = ({}:GlobalSearchProps)=>{
    
   const [users, setUsers]= useState(allusers)

   const handleSearch = (text: string) => {
    const filteredSearch = allusers.filter((user) =>user.includes(text))
    setUsers(filteredSearch)
}

    return(
        <>
          <div>
            <Search onChange={handleSearch}/> 
          </div>
          <div>
            <ul>
                {users.map((user)=>(
                    <li key={user}>{user}</li>
                ))}
            </ul>
          </div>
        </>
    )
}

export default GlobalSearch;