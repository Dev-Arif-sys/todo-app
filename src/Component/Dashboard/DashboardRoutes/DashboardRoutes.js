import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UseValue from '../../../hooks/UseValue';
import './DashboardRoutes.css';

const DashboardRoutes = () => {
    const [menuInfo,setMenuInfo]=useState('alltodo')
    const {searchTodo, deleteAllTask,deleted,resetAllTask}=UseValue()
    const handleChange=(e)=>{
        
        searchTodo(e.target.value)

    }
    return (
        <div className='dashboard-routes'>
            {/* all the nested routes link */}
            <div className='menu-link-list'>
                <input type='text' onChange={handleChange} placeholder='search here' className='search-input'></input>
            <NavLink id={menuInfo==='alltodo' && 'active'} onClick={()=>setMenuInfo('alltodo')} className='menu-link' to='/alltodo'>All Todo's</NavLink>
            <NavLink id={menuInfo==='hidden' && 'active'} onClick={()=>setMenuInfo('hidden')} className='menu-link' to='/hidden'>Hidden task</NavLink>
            <NavLink id={menuInfo==='completed' && 'active'} onClick={()=>setMenuInfo('completed')} className='menu-link' to='/Completed'>Completed</NavLink>
            
            </div>
            <div className='todo-content'>
              <Outlet/>
            </div>
            <div className='btn-container'>
                {
                    deleted.length ===0 ?    <button className='gen-btn' onClick={deleteAllTask}>Delete all task</button> :  <button className='gen-btn' onClick={resetAllTask}>Reset all task</button> 
                }
         
            </div>
            
        </div>
    );
};

export default DashboardRoutes;