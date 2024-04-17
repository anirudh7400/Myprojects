import React from 'react'
import './Explore.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Explore = () => {
  return (
    <div className='Explore'> 
    
    <Sidebar />
      
    <div className='exploreMid'>
        <div className = "explore__header">
            <h2>This is Explore Page !!</h2>
        </div>
    </div>
      
      <Widgets />

    </div>
    
  )
}

export default Explore