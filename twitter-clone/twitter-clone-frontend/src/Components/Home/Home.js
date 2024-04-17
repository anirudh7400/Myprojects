import React, { createContext } from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
export const Context = createContext();

const Home = () => {
 
    
    const email =  JSON.parse(localStorage.getItem("email"))  
  
  return (

    <div className='home'> 

    <Context.Provider value={email}>

    <Sidebar />
      
      <Feed />
      
      <Widgets />

    </Context.Provider>
     
    </div>
  )
}

export default Home