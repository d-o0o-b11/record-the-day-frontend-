import React ,{useState, useEffect} from "react";
import icon8 from "../img/icon8.png"
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, onCheckToggle, onRemove}) =>{

    return(
        <>
            <div>
                {todos.map(todo=>(
                    <ToDoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onRemove={onRemove}/>
                ))}
            </div>
        </>
    )
}


export default ToDoList