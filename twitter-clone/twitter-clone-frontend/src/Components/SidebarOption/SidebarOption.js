import React from 'react'
import './SidebarOption.css'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'


function SidebarOption({ text, Icon }) {

    const navigate = useNavigate();

    const handleClick = (e) =>{
        if(refOne.current.contains(e.target)){
            navigate('/'+text)
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