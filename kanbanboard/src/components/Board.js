import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Board.css'

const Board = ({tasks,setTasks}) => {

  const [toDoTask, setToDotask] = useState()
  const [inprogressTask, setInprogressTask] = useState()
  const [onHoldTask, setOnHoldTask] = useState()
  const [completed, setCompleted] = useState()

  useEffect(() => {

    let ftoDoTask = tasks.filter((value) => value.type === "to do")
    setToDotask(ftoDoTask)

    let finprogressTask = tasks.filter((value) => value.type === "inprogress")
    setInprogressTask(finprogressTask)

    let fonHoldTask = tasks.filter((value) => value.type === "on hold")
    setOnHoldTask(fonHoldTask)

    let fcompleted = tasks.filter((value) => value.type === "completed")
    setCompleted(fcompleted)

  }, [tasks])

  return (
    <div className='downmain'>
      <h1>Kanban Board</h1>
      <div className='cards'>
        <Card boardname = "to do"  allTasks={toDoTask}/>
        <Card boardname = "inprogress"   allTasks={inprogressTask}/>
        <Card boardname = "on hold" allTasks={onHoldTask}/>
        <Card boardname = "completed"  allTasks={completed}/>
      </div>
    </div>
  )
}

export default Board
