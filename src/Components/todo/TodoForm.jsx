import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { add } from "../Features/Todo";
import TodoList from "./TodoList";

const TodoForm = () => {
    const dispatch=useDispatch()
    const todoItem=useSelector((state)=>state.todo)
    const [task,setTask]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(add({id:todoItem.length+1,item:task}))
        setTask("")

    }
  return (

    <div>
      <form onSubmit={handleSubmit} action="">
        <label>task</label>
        <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" />
        <button>submit</button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoForm;
