import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardRoutes.css';

const DashboardRoutes = () => {
    const [menuInfo,setMenuInfo]=useState('alltodo')
    return (
        <div className='dashboard-routes'>
            {/* all the nested routes link */}
            <div className='menu-link-list'>
            <NavLink id={menuInfo==='alltodo' && 'active'} onClick={()=>setMenuInfo('alltodo')} className='menu-link' to='/alltodo'>All Todo's</NavLink>
            <NavLink id={menuInfo==='hidden' && 'active'} onClick={()=>setMenuInfo('hidden')} className='menu-link' to='/hidden'>Hidden task</NavLink>
            <NavLink id={menuInfo==='completed' && 'active'} onClick={()=>setMenuInfo('completed')} className='menu-link' to='/Completed'>Completed</NavLink>
            <NavLink id={menuInfo==='others' && 'active'} onClick={()=>setMenuInfo('others')} className='menu-link' to='/others'>Others</NavLink>
            </div>
            <div className='todo-content'>
              <Outlet/>
            </div>
        </div>
    );
};

export default DashboardRoutes;