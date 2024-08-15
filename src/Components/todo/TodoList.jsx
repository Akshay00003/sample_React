import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../Features/Todo";
import {Link} from 'react-router-dom'

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);

    dispatch(deleteItem(id));
  };
  return (
    <div>
      {todo.length > 0 ? (
        todo.map((task) => (
          <div style={{ display: "flex" }} key={task.id}>
            <li>{task.id}</li>
            <li>{task.item}</li>
            <button onClick={()=>handleDelete(task.id)}>Delete</button>
            <Link to={`/${task.id}`}>
            <button>Edit</button>
            </Link>


          </div>
        ))
      ) : (
        <h1>No tasks</h1>
      )}
    </div>
  );
};

export default TodoList;
