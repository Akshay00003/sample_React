import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { updateTodo } from "../Features/Todo";
import TodoList from "./TodoList";


const UpdateForm = () => {
  const { Tid } = useParams();
  const todo = useSelector((state) => state.todo);
  console.log("todo is ",todo);

const dispatch=useDispatch()

  const existingTodo = todo.filter((f) => f.id == Tid);
  
  const {id, item}=existingTodo[0]
console.log('e',existingTodo);

  const [task,setTask]=useState(item)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id,item:task}))
    setTask("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>task</label>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button>submit</button>
      </form>
      <TodoList />
    </div>
  );
};

export default UpdateForm;
