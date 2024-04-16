import React, { useState } from 'react'
import './Controler.css'
import {toast}  from 'react-toastify';

const Controler = ({tasks, setTasks}) => {

  const list = ["to do","inprogress","on hold","completed"]
  const [task,setTask] = useState({
    name: "",
    type: "to do"
  })

  const [taskName,setTaskName] = useState({
    name: "",
    type: "",
  })

  const handleChange = (e) =>{
  setTask({...task,name: e.target.value})
  }

  const createTask = (e) =>{
    
    e.preventDefault()
    setTasks( (prev) => {
      const list = [...prev, task]
      
      localStorage.setItem("tasks",JSON.stringify(list))
      return list
    })

    setTask({
      name: "",
      type: "to do"
    })
  }

  const handleSomeChange = (e) =>{
    setTaskName({...taskName,name:e.target.value})
  }

  const nextClick = (e) =>{
    e.preventDefault()
    let temp = tasks.filter((value) => value.name == taskName.name)
    if(temp.length == 0){
      toast("no record found")
      setTaskName({
        name: "",
        type: ""
      })
      return

    }

    let idx = list.indexOf(temp[0].type) 
    if(idx == 3){
      toast("can't go further next")
      setTaskName({
        name: "",
        type: ""
      })
      return
    }
    let newarray = tasks.filter((value) => value.name != taskName.name)
    temp[0].type = list[idx+1]
    let farray = [...newarray,temp[0]]
    setTasks(farray)
    localStorage.setItem("tasks",JSON.stringify(farray))

    setTaskName({
      name: "",
      type: ""
    })
  }

  const previousClick = (e) => {
    e.preventDefault()
    let temp = tasks.filter((value) => value.name == taskName.name)
    if(temp.length == 0){
      toast("no record found")
      setTaskName({
        name: "",
        type: ""
      })
      return

    }
    let idx = list.indexOf(temp[0].type)
    if(idx == 0){
      toast("can't go previous")
      setTaskName({
        name: "",
        type: ""
      })
      return
    }
    let newarray = tasks.filter((value) => value.name != taskName.name)
    temp[0].type = list[idx-1]
    let farray = [...newarray,temp[0]]
    setTasks(farray)
    localStorage.setItem("tasks",JSON.stringify(farray))

    setTaskName({
      name: "",
      type: ""
    })
  }

  const deleteClick = (e) => {
    e.preventDefault()
    let newarray = tasks.filter((value) => value.name != taskName.name)
    setTasks(newarray)
    localStorage.setItem("tasks",JSON.stringify(newarray))

    setTaskName({
      name: "",
      type: ""
    })
  }


  return (
    <div className='maincontainer'>
      <h1>Controller</h1>
      
      <div className='upContainer'>
        <form className='form1' onSubmit={createTask}>
            <input className='forminput'  type='text' placeholder='new task'
            onChange={handleChange} value={task.name}></input>
            <button className='formbutton'>create task</button>
        </form>

        <form className='form2'>
        <input className='forminput' type='text' placeholder='enter task'
         onChange={handleSomeChange} value={taskName.name}></input>
            <button className='formbutton' onClick={nextClick}>next</button>
            <button className='formbutton' onClick={previousClick}>previous</button>
            <button className='formbutton' onClick={deleteClick}>delete</button>
        </form>
      </div>
    </div>
  )
}

export default Controler
