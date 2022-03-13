import React from 'react';
import UseValue from '../../../hooks/UseValue';
import TodoCard from '../../Shared/TodoCard';

const HiddenTask = () => {
    const {tasks}=UseValue()
    return (
        <div className='todo-layout'>
           {
               tasks?.filter(task=>task.visibility==='hidden').map(task=>{
                   return <TodoCard key={task.key} task={task}></TodoCard>
               })
           }
        </div>
    );
};

export default HiddenTask;