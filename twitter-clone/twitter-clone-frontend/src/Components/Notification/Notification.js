import React from 'react'
import './Notification.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Notification = () => {
  return (
    <div className='Notification'>

<Sidebar />
      
      <div className='notificationMid'>
          <div className = "notification__header">
              <h2>This is Notification Page !!</h2>
          </div>
      </div>
        
        <Widgets />
    </div>
  )
}

export default Notification