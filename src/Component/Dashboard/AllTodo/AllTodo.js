import React from 'react';
import UseValue from '../../../hooks/UseValue';
import TodoCard from '../../Shared/TodoCard';
import './AllTodo.css';

const AllTodo = () => {
    
    const {displayTask}=UseValue()
    

   
    return (
        <div className='todo-layout'>
           {
               displayTask?.filter(task=>task.visibility!=='hidden' && task.status!=='done' ).map(task=>{
                   return <TodoCard key={task.key} task={task}></TodoCard>
               })
           }
        </div>
    );
};

export default AllTodo;