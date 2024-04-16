import React from 'react'
import './Message.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Message = () => {
  return (
    <div className='Message'>
 
 <Sidebar />
      
      <div className='messageMid'>
          <div className = "message__header">
              <h2>This is Message Page !!</h2>
          </div>
      </div>
        
        <Widgets />

    </div>
  )
}

export default Message