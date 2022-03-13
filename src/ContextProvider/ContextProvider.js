import React, { createContext } from 'react';
import UseTask from '../hooks/UseTask';

export const taskContext=createContext()

const ContextProvider = ({children}) => {
   const allTask=UseTask()
    return (
        <taskContext.Provider value={allTask}>
            {children}
        </taskContext.Provider>
    );
};

export default ContextProvider;