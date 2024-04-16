import React from 'react'
import styles from './Firstpage.module.css'
import { Button } from '@mui/material';
import Twitterlogo from '../../Assests/twitter_logo.jpg'
import { useNavigate } from 'react-router';



const Login = () => {


const navigate = useNavigate();


  return (
        <div className={styles.container}>

            <div className={styles.left}>
            <img src= {Twitterlogo} className={styles.image} />

            </div>

            <div className={styles.right}>
                

                <h1 class={styles.mt-20}>Happening now</h1>
                <h2 class={styles.mt-20}>Join today.</h2>

                <Button variant = "outlined" className = {styles.signup} onClick={() => navigate("/signup")}>Create Account</Button>


                <h4>Already have an account ?</h4>
                <Button variant = "outlined" className = {styles.signin} onClick={() => navigate("/login")}>Sign in</Button>

            
        </div>
        </div>
  )
}

export default Login