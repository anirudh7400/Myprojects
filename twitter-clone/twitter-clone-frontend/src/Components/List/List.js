import React from 'react'
import './List.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'


const List = () => {
  return (
    <div className='List'>
         <Sidebar />
      
      <div className='listMid'>
          <div className = "list__header">
              <h2>This is List Page !!</h2>
          </div>
      </div>
        
        <Widgets />
    </div>
  )
}

export default List