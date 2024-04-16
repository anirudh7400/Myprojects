import React from 'react'
import './Profile.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Profile = () => {
  return (
    <div className='Profile'>

<Sidebar />
      
      <div className='profileMid'>
          <div className = "profile__header">
              <h2>This is Profile Page !!</h2>
          </div>
      </div>
        
        <Widgets />
        
    </div>
  )
}

export default Profile