import React, { useState } from 'react';
import UseValue from '../../hooks/UseValue';
import './TodoCard.css';

const TodoCard = ({task}) => {
      const {MarkDone,DeleteTask,updateEditTask,hideorUnHideTask}=UseValue()
      const [editing,setEditing]=useState(false)
      const [updateTask,SetUpdateTask]=useState(task?.task)
      const [updateKey,setUpdateKey]=useState({})
    const HandleEditTask=(task)=>{
      setEditing(true)
    //   making an obj for store other info
        
        setUpdateKey({...task})
      
    }
//  trigger on update button
    const handleUpdate=()=>{
        const updateTaskObj={
            ...updateKey,
            task:updateTask
           
        }
        updateEditTask(updateTaskObj)
        setEditing(false)
    
    }
    const handleHideUnhide=(task,visibility)=>{
       const updatedObj={
           ...task,
           visibility,
       }
       hideorUnHideTask(updatedObj)
    }
    return (
        <div className='task-card'>
            <p  onClick={()=>DeleteTask(task.key)} className='delete-btn'>X</p>
            <p onClick={()=>HandleEditTask(task)} className='edit-btn'><i class="bi bi-pencil-square"></i></p>
            <p className='status'>{ task?.status}</p>
            {
                editing?<input onChange={(e)=>SetUpdateTask(e.target.value)} defaultValue={task?.task } />: <h2>{ task?.task}</h2>
            }
           
           {
               editing ? <button className='gen-btn' onClick={handleUpdate}>Update</button> :<div> <button onClick={()=>MarkDone(task?.key)} className='gen-btn mark-done-btn'>Mark as done</button>
               {/* check between hide and unhide button */}
               {task.visibility==='hidden' ? <button className='gen-btn'onClick={()=>handleHideUnhide(task,"")} >UnHide</button> :<button className='gen-btn' onClick={()=>handleHideUnhide(task,"hidden")} >Hide</button> } </div>  
           }
           
        </div>
    );
};

export default TodoCard;