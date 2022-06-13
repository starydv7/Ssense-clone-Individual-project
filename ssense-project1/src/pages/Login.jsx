import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const[logincreds,setlogincreds]=useState({})
  const {login}=useContext(AuthContext)
  const handleChange=(e)=>{
      
         const{name,value}=e.target;
         setlogincreds({
             ...logincreds,
             [name]:value,
         })
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      login()
    navigate("/Everythings");
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" type="email" name="email" placeholder="email" onChange={handleChange}/>
      <input data-cy="login-password" type="password" name="password" placeholder="enter password" onChange={handleChange} />
      <button data-cy="login-submit">submit</button>
      </form>

    </div>
  );
};

export default Login;
