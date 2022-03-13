import React from 'react';
import AddTask from './AddTask/AddTask';
import './Dashboard.css';
import DashboardRoutes from './DashboardRoutes/DashboardRoutes';

const Dashboard = () => {
    
    
    return (
        <div className='dashboard'>
            <h4 className='dashboard-title'>Your Dashboard</h4>
            <div className='dashboard-layout'>
            <AddTask ></AddTask>
            <DashboardRoutes ></DashboardRoutes>
        
            </div>
          
        </div>
    );
};

export default Dashboard;