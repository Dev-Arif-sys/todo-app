import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllTodo from './Component/Dashboard/AllTodo/AllTodo';
import CompletedTask from './Component/Dashboard/CompletedTask/CompletedTask';
import Dashboard from './Component/Dashboard/Dashboard';
import HiddenTask from './Component/Dashboard/HiddenTask/HiddenTask';
import ContextProvider from './ContextProvider/ContextProvider';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}>
        <Route path='/' element={<AllTodo></AllTodo>}/>
        <Route path='/alltodo' element={<AllTodo></AllTodo>}/>
        <Route path='/completed' element={<CompletedTask></CompletedTask>}/>
        <Route path='/hidden' element={<HiddenTask></HiddenTask>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
