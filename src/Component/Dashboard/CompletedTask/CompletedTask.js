import React from 'react';
import UseValue from '../../../hooks/UseValue';
import TodoCard from '../../Shared/TodoCard';

const CompletedTask = () => {
    const {tasks}=UseValue()
    return (
        <div className='todo-layout'>
           {
               tasks?.filter(task=>task.status==='done').map(task=>{
                   return <TodoCard key={task.key} task={task}></TodoCard>
               })
           }
        </div>
    );
};

export default CompletedTask;