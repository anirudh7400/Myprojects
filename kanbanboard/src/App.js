import './App.css';
import Controler from './components/Controler'
import Board from './components/Board'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  
    const [tasks,setTasks] = useState([])
    
    useEffect( () => {

      setTasks(JSON.parse(localStorage.getItem("tasks")))

    },[])

  return (

   
    <div className="App">
     <Controler tasks = {tasks} setTasks={setTasks} />
     <Board tasks = {tasks} setTasks={setTasks} />
     <ToastContainer/>   
    </div>
  );
}

export default App;
