import React, { useState } from 'react';
import UseValue from '../../../hooks/UseValue';
import './AddTask.css';

const AddTask = () => {
    const [task,setTask]=useState('')
    const {tasks,setTasks,setDisplayTask}=UseValue()
    

    // adding task function to add task
     const HandleAddTask=(e)=>{
        //  making the task object
           if(task===""){
             alert('Add A task first')
           }else{
            const taskObj={
                task,
                key:Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1) ,
                status:'todo',
                visibility:''
            }
            
           //    add the new task into tasks array
            setTasks([taskObj,...tasks,])
            setDisplayTask([taskObj,...tasks])
            setTask('')
           }
         
         
         e.preventDefault()
     }

    return (
        <div className='add-task'>
          <h5 className='add-task-title'>Add a Task</h5>
          <form onSubmit={HandleAddTask} >
          <textarea onChange={(e)=>{setTask(e.target.value)}} className='input-task' value={task} rows="4" cols="30" ></textarea>
          <button type='submit' className='gen-btn add-task-btn'>Add Task</button>
          </form>
        </div>
    );
};

export default AddTask;