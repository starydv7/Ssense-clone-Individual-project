import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom'
import "./login.css";
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
  const onClick = () => {
    navigate("./payment");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Login</label>
        <br />
        <br />
        <label className="email">Email address</label>
        <br/>
        <input  type="email" name="email" placeholder="email" onChange={handleChange} />
        <br />
        <br />
        <label className="password">Password</label>
        <br/>
        <input  type="password" name="password" placeholder="enter password" onChange={handleChange} />
        <br />
        <br/>
        <button className="btn">submit</button>
      </form>

    </div>
  );
};

export default Login;
