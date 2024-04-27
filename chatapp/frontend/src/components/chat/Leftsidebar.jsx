import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import Logo from '../../assets/logo2.jpg'
const Leftsidebar = () => {
  return (
    <div className=" w-[100px]">

<div className='flex flex-col  items-center'>

        <div className=' h-[70px] w-[70px] mt-[20px] relative'>
            <img className="absolute inset-0 object-cover w-full h-full"  src={Logo}></img>
        </div>
        <div className='flex flex-col  items-center mt-[50px]'>

            <div className='flex flex-col h-[70px] w-[80px]  items-center  mt-[50px] hover:bg-gray-700 transition-colors cursor-pointer bg-opacity-75 hover:rounded-lg'>
            <ChatIcon  style={{ color: '#E2EAF6', fontSize: "25px", marginTop: "10px", marginBottom: "5px" }}/>
            <label className=' text-gray-400 text-[12px] font-medium '>All Chats</label>
            </div>

            <div className='flex flex-col h-[70px] w-[80px] items-center mt-[20px]  hover:bg-gray-700 transition-colors cursor-pointer bg-opacity-75 hover:rounded-lg'>
            <Person2Icon  style={{ color: '#E2EAF6', fontSize: "25px" , marginTop: "10px", marginBottom: "5px" }}/>
            <label className=' text-gray-400 text-[12px] font-medium '>Profile</label>
            </div>


            <div className='flex flex-col h-[70px] w-[80px] items-center mt-[240px]  hover:bg-gray-700 transition-colors cursor-pointer bg-opacity-75 hover:rounded-lg'>
            <LogoutIcon  style={{ color: '#E2EAF6', fontSize: "25px", marginTop: "10px", marginBottom: "5px"  }}/>
            <label className=' text-gray-400 text-[12px] font-medium '>Log out</label>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default Leftsidebar
