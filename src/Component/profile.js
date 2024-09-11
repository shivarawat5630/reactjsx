import React from 'react'
import  Bio  from "./bio";

import "./c.css";
import PropTypes from "prop-types";
const profile = (props) => {

    // destruture  props  to extract  name bio and age
    const {name, age, bio}=props;
  return (
    <div className='Profile-box'>
        <h1>Profile</h1>
        <h2>Name:{name}</h2>
        <p>age:{age}</p>
        <Bio bio={bio}></Bio>
    </div>
  );
}

  profile.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    bio:PropTypes.object.isRequired,
}



export default profile