import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, onCheckToggle, onRemove}) =>{

    //check를 누르면 정렬이 되지않은 check한 list가 제일 밑으로 가도록 정렬되어있다.
    //해결 => 프론트에서 axios.get data를 sort한 후 뿌리기로 하였다.
    //오름차순
    // todos.sort(function(a,b){
    //     return a["id"]-b["id"];
    // })

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