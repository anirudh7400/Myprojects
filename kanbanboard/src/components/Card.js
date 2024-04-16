import React, { useState,useEffect } from 'react'
import './Card.css'

const Card = ({boardname,allTasks}) => {

  const [someTask,setSomeTask] = useState()

  useEffect(() => {

    if(allTasks != undefined){
      const myList = allTasks.map((item) => <p>{item.name}</p>)

    setSomeTask(myList)
    } 
    
  },[allTasks])


  return (
    <div className='card'>
      <div className='boardheading'>{boardname}</div>
      <div className='boardtext'>{someTask}</div>

    </div>
  )
}

export default Card
