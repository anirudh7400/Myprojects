import React, { createContext } from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Widgets from '../Widgets/Widgets'
import { useLocation } from 'react-router'

export const Context = createContext();

const Home = () => {


  const location = useLocation();
  const email = location.state.email;

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