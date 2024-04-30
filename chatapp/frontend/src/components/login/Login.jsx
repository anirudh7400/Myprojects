import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import axios from "axios";

const Login = () => { 

  const navigate = useNavigate();
  const [data,setData] = useState({
    email: '',
    password: ''

  })

  const [formError,setFormError] = useState({})
  const [isSubmit,setIsSubmit] = useState(false)

  const handleChange = (e,field) => {
    setData({...data,[field]:e.target.value})
  }

  const validate = (values) =>{
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.email){
      error.email = "Email is Required !!";
    }
    else if(!regex.test(values.email)){
      error.email = "Please enter a valid email"
    }
    
    if(!values.password){
      error.password = "Password is Required !!";
    }
    else if(values.password.length < 4){
      error.password = "Password must be atleast 4 character";
    }
    else if(values.password.length > 10){
      error.password = "Password should be less than 10 characters";
    }
    
    return error;
  }

  const handleClick = (e) => {
    //e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
  }

  const signIn = () => {
    axios.post('http://localhost:4000/login',data).then(() => {
      toast.success("Login successfull !!!")
      navigate("/chat");
    }).catch((err) => {
      toast.error(err.response.data.error)
      setData({
        email: '',
        password: ''
      })
    })  
  }

  useEffect( () => {

    //console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      signIn()
    }
    else{
      setIsSubmit(false)
      console.log();
      
      Object.keys(formError).forEach( key => {
        toast.error(`${formError[key]}`);
      });
       
    }

  },[formError])







  return (
    <div className = " bg-[#F7F7F7]  h-screen flex justify-center items-center  ">
      <div className=" bg-[#FFFFFF] h-[500px] w-[450px] rounded-2xl shadow-xl ">

          <div className="mt-[30px]">
            <div className="text-3xl font-sans font-bold text-slate-700		 text-center">Login</div>
          </div>

          <div className="mt-[30px] flex flex-col">

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[60px] ml-[40px] text-gray-600 text-sm transition-all">Email</label>
            <input type="text" className="w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none  placeholder:text-slate-400 focus:border-blue-500" placeholder="email" 
             onChange={(e) => handleChange(e,'email')} value={data.email}/>
          </div>

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[35px] ml-[40px] text-gray-600 text-sm transition-all" >Password</label>
            <input type="password" className="w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none  placeholder:text-slate-400 focus:border-blue-500" placeholder="password" 
            onChange={(e) => handleChange(e,'password')} value={data.password}/>
          </div>

            <button onClick={handleClick}  className="mt-[30px] h-[40px] w-[250px] bg-slate-700 rounded-lg text-white  font-sans font-medium m-auto">Sign In</button>
          </div>

          <div className="flex mt-[20px] justify-center items-center	 ">
              <p className="text-sm font-sans font-medium text-slate-400">Don't have an account ? </p> 
              <NavLink to="/signup">Sign Up</NavLink>
          </div>
      
          <p className="text-sm font-sans font-medium text-slate-400	mt-[20px]	 text-center">or</p>
          <button className="mt-[30px] h-[40px] w-[250px] bg-slate-700 rounded-lg text-white  font-sans font-medium ml-[95px]">Google login</button>
          </div>
      
    </div>
  )
}

export default Login
