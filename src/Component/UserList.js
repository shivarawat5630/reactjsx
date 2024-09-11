import React from 'react'
import  userp  from "./UserProfile";

import PropTypes from "prop-types";


const UserList = (props) => {
    
  return (
    <div><h1>UserList</h1>
    <ul>
        <li onClick={()=>{onclickuser=("shiva Rawat")}}> John Snow</li>
        <li onclick={()=>{onclickuser=("shiva Rawat")}}>Arya stack</li>
        <li onClick={()=>{onclickuser=("shiva Rawat")}}> Shiva Rawat</li>
    </ul>


    </div>
  )
}

export default UserList