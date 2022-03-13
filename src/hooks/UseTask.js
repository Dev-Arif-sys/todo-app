import { useState } from "react"


const UseTask=()=>{
  const [tasks,setTasks]=useState([])
//   to store the single task from input
  
  const MarkDone=(key)=>{
     
    const index=tasks.findIndex(task=>task.key===key)
    tasks[index].status='done'
    setTasks([...tasks])
    
  }

  const updateEditTask=(updateTaskObj)=>{
        const updatedTask=tasks.map(task=>task.key===updateTaskObj.key?updateTaskObj :task)
        setTasks([...updatedTask])
        console.log(tasks)
  }

  const hideorUnHideTask=(updatedTaskObj)=>{
      console.log(updatedTaskObj)
    const updatedTask=tasks.map(task=>task.key===updatedTaskObj.key?updatedTaskObj :task)
    setTasks([...updatedTask])
  }
  const DeleteTask=(key)=>{
      const tempTasks=tasks?.filter(task=>task.key!==key)
         setTasks([...tempTasks])
  }

  


  
    return{
        tasks,
        setTasks,
        MarkDone,
        DeleteTask,
        updateEditTask,
        hideorUnHideTask
    }
}

export default UseTask