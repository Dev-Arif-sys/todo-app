import { useState } from "react"


const UseTask=()=>{
  const [tasks,setTasks]=useState([])
  const [displayTask,setDisplayTask]=useState([...tasks])
  const [deleted,setDeleted]=useState([])
//   to store the single task from input
  

// function for make done project
  const MarkDone=(key)=>{
     
    const index=tasks.findIndex(task=>task.key===key)
    tasks[index].status='done'
    setDisplayTask([...tasks])
    setTasks([...tasks])
    
  }

  // editing task and update
  const updateEditTask=(updateTaskObj)=>{
        const updatedTask=tasks.map(task=>task.key===updateTaskObj.key?updateTaskObj :task)
        setDisplayTask([...updatedTask])
        setTasks([...updatedTask])
  }


  // function for hide or un-hide
  const hideorUnHideTask=(updatedTaskObj)=>{
      console.log(updatedTaskObj)
    const updatedTask=tasks.map(task=>task.key===updatedTaskObj.key?updatedTaskObj :task)
    setDisplayTask([...updatedTask])
    setTasks([...updatedTask])
  }

  // delete task single
  const DeleteTask=(key)=>{
      const tempTasks=tasks?.filter(task=>task.key!==key)
         setDisplayTask([...tempTasks])
         setTasks([...tempTasks])
  }

  // search function
   const searchTodo=(search)=>{
     
     const searchData=tasks.filter(task=>task.task.toLowerCase().includes(search.toLowerCase()))
   setDisplayTask([...searchData])
   console.log(displayTask)
      
   }


  //  delete all task
  const deleteAllTask=()=>{
      setDeleted([...tasks])
      setTasks([])
      setDisplayTask([])
  }
  // reset all task
  const resetAllTask=()=>{
    setTasks([...deleted])
    setDisplayTask([...deleted])
    setDeleted([])
  }


  
    return{
        tasks,
        setTasks,
        MarkDone,
        displayTask,
        DeleteTask,
        updateEditTask,
        hideorUnHideTask,
        searchTodo,
        setDisplayTask,
        deleteAllTask,
        deleted,
        resetAllTask
       
    }
}

export default UseTask