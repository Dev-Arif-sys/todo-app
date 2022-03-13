import { useContext } from "react";
import { taskContext } from "../ContextProvider/ContextProvider";


const UseValue=()=>{
    return useContext(taskContext)
}
export default UseValue;