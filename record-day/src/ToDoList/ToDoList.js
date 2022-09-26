import React ,{useState, useEffect} from "react";
import icon8 from "../img/icon8.png"
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, onCheckToggle}) =>{

    return(
        <>
            <div>
                {todos.map(todo=>(
                    <ToDoItem todo={todo} ket={todo.id} onCheckToggle={onCheckToggle} />
                ))}
            </div>
        </>
    )
}


export default ToDoList