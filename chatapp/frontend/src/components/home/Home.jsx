import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
import React from "react";

const Home = () => {

    const navigate = useNavigate();

    const handleSignUp = (e) =>{
        navigate("/signup");
            <NavLink to="/signup" />
        
    }

    const handleSignIn = (e) => {
        navigate("/login");
    }

    return(
        <div className="flex  ">
            <p>this is home page !!</p>
            <button onClick={handleSignUp} className="h-[50px] w-[150px] ml-[50px] mr-[20px] bg-blue-400 text-white ">Sign Up</button>
            
            <button onClick={handleSignIn} className="h-[50px] w-[150px] ml-[50px] mr-[20px] bg-blue-400 text-white " >Login</button>
        </div>
    );
}

export default Home;