import React, {useEffect ,useState } from 'react'
import styles from  './Login.module.css'
import axios from 'axios' 
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'


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

  const signIn = (userData) => {
      axios.get('http://localhost:8080/getUser/'+ userData.email +'/'+ userData.password).then(
        (resp) => {
          if(resp.status == 200){
            navigate('/Home' , {state: {email: userData.email}})
            toast.success("Login successful !!")       
          }
                
        }
      ).catch((err) => {
        console.log(err)
        toast.error("Invalid credentials !!")
        setData({
          email: '',
          password: ''
        })
      })
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

  
  const submitForm = (e) => {
    e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
  }

  
  useEffect( () => {

    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit){
      signIn(data)
    }
    else{
      setIsSubmit(false)
    }

  },[formError])




  return (
    <div className={styles.login}> 
      
      <div class={styles.background}>
        <div class={styles.shape}></div>
        <div class={styles.shape}></div>
    </div>
    <form onSubmit={submitForm} className={styles.loginForm}>
        <h3>Login Here</h3>

        <label className={styles.loginLabel} for="username">Email</label>
        <input className={styles.loginInput} type="text" placeholder="Email" id="username" 
            onChange={(e) => handleChange(e,'email')}
            value={data.email}
        />
          <p>{formError.email}</p>

        <label className={styles.loginLabel} for="password">Password</label>
        <input className={styles.loginInput} type="password" placeholder="Password" id="password" 
             onChange={(e) => handleChange(e,'password')}
             value={data.password}
        />
         <p>{formError.password}</p>

        <button className={styles.loginButton}>Log In</button>
    </form>
    
    </div>
  )
}

export default Login