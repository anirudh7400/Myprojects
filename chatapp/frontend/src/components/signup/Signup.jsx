import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import axios from "axios";

const Signup = () => {

  const navigate = useNavigate();
  const [data,setData] = useState({

    firstName: '',
    lastName: '',
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

    if(!values.firstName){
      error.userName = "Username is Required !!";
    }

    if(!values.lastName){
      error.userName = "Username is Required !!";
    }
    
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

  const signUp = async () => {
    await axios.post('http://localhost:4000/addUser', data).then((res) => { 
      toast.success("registration successfull !!!")
      navigate("/login");
     // console.log(res);
    }).catch((err) => {
      toast.error(err.response.data.error)
      setData({
        userName: '',
        email: '',
        password: ''
      })
    //  console.log(err);
    })
  }

  const handleClick = (e) => {
    //e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
  }

  useEffect( () => {

    //console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      signUp()
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
      <div className=" bg-[#FFFFFF] h-[600px] w-[450px] rounded-2xl shadow-xl ">

          <div className="mt-[30px]">
            <div className="text-3xl font-sans font-bold text-slate-700		 text-center">Sign Up</div>
            <div className="text-sm font-sans font-medium text-slate-400	mt-[20px]	 text-center">Let's get started with your 30 day free trial !!!</div>
          </div>

          <div className="mt-[50px] flex flex-col">
         
          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[30px] ml-[40px] text-gray-600 text-sm transition-all ">First Name</label>
            <input type="text" className="bg-white w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  placeholder:text-slate-400" placeholder= "firstname"
                 onChange={(e) => handleChange(e,'firstName')} value={data.firstName} />
  
          </div>

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[30px] ml-[40px] text-gray-600 text-sm transition-all ">Last Name</label>
            <input type="text" className="bg-white w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  placeholder:text-slate-400" placeholder= "lastname"
                 onChange={(e) => handleChange(e,'lastName')} value={data.lastName} />
  
          </div>
          
          
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

            <button onClick={handleClick} className="mt-[30px] h-[50px] w-[300px] bg-slate-700 rounded-lg text-white  font-sans font-medium m-auto">Sign Up</button>
          </div>

          <div className="flex mt-[20px] justify-center items-center	 ">
              <p className="text-sm font-sans font-medium text-slate-400">Already have an account ? </p>
              <NavLink to="/login">Login</NavLink>
          </div>
      

          </div>
      
    </div>
  )
}

export default Signup
