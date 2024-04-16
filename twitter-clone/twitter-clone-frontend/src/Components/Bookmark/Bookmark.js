import React from 'react'
import './Bookmark.css'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'

const Bookmark = () => {
  return (
    <div className='Bookmark'>

    <Sidebar />
      
      <div className='bookmarkMid'>
          <div className = "bookmark__header">
              <h2>This is Bookmark Page !!</h2>
          </div>
      </div>
        
    <Widgets />
    </div>
  )
}

export default Bookmark