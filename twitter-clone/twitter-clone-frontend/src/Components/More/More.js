import React from 'react'
import './More.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const More = () => {
  return (
    <div className='More'> 

      
<Sidebar />
      
      <div className='moreMid'>
          <div className = "more__header">
              <h2>This is more Page !!</h2>
          </div>
      </div>
        
        <Widgets />


    </div>
  )
}

export default More