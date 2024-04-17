import React from 'react'
import './SidebarOption.css'
import { useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import {Context} from '../Home/Home'     


function SidebarOption({ text, Icon }) {

    const navigate = useNavigate();
    const email2 = useContext(Context)

    const handleClick = (e) =>{
        if(refOne.current.contains(e.target)){
            navigate('/'+text, {state: {email1: email2}}) 
        }
        else{
            console.log("error")
        }
    }

    useEffect( () => {
        document.addEventListener("click",handleClick,true);
        return () => {
            document.removeEventListener("click",handleClick,true);
        };
    },[])

    const refOne = useRef(null);


    return (
        <div className = 'sidebarOption' ref={refOne}> 
            <Icon />
            <h2>{text}
        </h2>
    

        </div>
    )
}

export default SidebarOption