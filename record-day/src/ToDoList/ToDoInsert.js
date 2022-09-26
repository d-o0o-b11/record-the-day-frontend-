import React, { useState } from "react";
import "./ToDoInsert.css"

const ToDoInsert = ({onInsertToggle, onInsertTodo})=>{

    const [listvalue , SetListValue] = useState("");

    const onChange = e =>{
        SetListValue(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onInsertTodo(listvalue);
        SetListValue("");
        onInsertToggle();
    }

    return(
        <>
                <div>
                    <form onSubmit={onSubmit}>
                        <input 
                            className="list_input" 
                            placeholder="추가 일정"
                            id="list"
                            value={listvalue}
                            onChange={onChange}
                            />
                        <button className="store_list" type="submit"><h4>추가</h4></button>
                    </form>
                </div>
        </>
    )
}

export default ToDoInsert