import React ,{useState, useEffect} from "react";
import "./ToDoList.css"

const ToDoList = () =>{

    const [message, setMessage]=useState([]);
        useEffect(()=>{
            fetch("/ToDoList")
                .then((res)=>{
                return res.json();
                })
                .then((data)=>{
                    setMessage(data);
                });
        },[]);

    return(
        <>
         <ul>
          {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul>
        </>
    )
}


export default ToDoList