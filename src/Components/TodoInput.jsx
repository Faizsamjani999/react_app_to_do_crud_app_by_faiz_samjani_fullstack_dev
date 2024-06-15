import { useState } from "react";
import "./Input.modules.css"
import TodoOutput from "./TodoOutput";


const TodoInput = ()=>{

    const [state,setState] = useState("");
    const [arr,setArr] = useState([]);

    const handleClick = ()=>{
        let obj = {
            id : Date.now(),
            work : state,
            isCompleted : false
        }
        setArr([...arr,obj])

        setState("")
    }
    console.log(arr);

    const deleted = (id)=>{
        let value = arr.filter((val)=>{
            return val.id !== id
        })
        setArr(value)
    }

    const update = (id)=>{
        let value = arr.map((val)=>{
            if(val.id == id)
            {
                return({...val,isCompleted : !val.isCompleted})
            }
            else{
                return(val)
            }
        })
        setArr(value)
    }

    return(
        <div>
            <div id="main">
                <h1 id="todo">To-do List</h1>
                <div id="heading">
                    <div id="input">
                    <input type="text" placeholder="Enter Your Task / Work" className="form-control" onChange={(val)=>{setState(val.target.value)}} value={state}/>
                    </div>
                    <button className="btn btn-primary" onClick={handleClick}>Added</button>
                </div>
                <div id="output">
                    {
                        arr.map((val)=>{
                            return(
                                <div>
                                    <TodoOutput value={val} dlt={deleted} updt={update}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoInput;