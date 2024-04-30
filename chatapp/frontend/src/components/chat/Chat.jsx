import React from 'react'
import Bgimage from '../../assets/bgimage.jpg'
import Leftsidebar from './Leftsidebar'
import CenterChatbox from './CenterChatbox'
import Rightsidebar from './Rightsidebar' 

const Chat = () => {
  return (

    <div className='relative h-screen bg-blue-400'>
      <img src={Bgimage} alt="" className="absolute inset-0 object-cover w-full h-full"/>
      <div className='flex  bg-slate-900 h-[700px] w-[1200px] rounded-3xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <Leftsidebar />

        <CenterChatbox />

        <Rightsidebar />
      </div>
    </div>
    
  )
}

export default Chat
