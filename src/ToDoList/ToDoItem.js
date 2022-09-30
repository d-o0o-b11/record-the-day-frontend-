import React from "react";
import "./ToDoItem.css"
import "./Template.css"
import check_f from "../img/check(false).png"
import check_t from "../img/check(true).png"
import cancel_btn from "../img/cancel_btn.png"

const ToDoItem = ({todo, onCheckToggle, onRemove})=>{
    const {id, content, checkTodo} = todo;

    return(
        <div className="todolist_frame2"> 
        <div className="insert_list">
            <div className={`content ${checkTodo ? 'checked_list' : ""}`}>
                <div className="margin_btn">
                    {checkTodo? 
                        <img src={check_t} 
                            className="checkbtn"
                            onClick={()=>{
                                onCheckToggle(id);
                            }}
                        /> : 
                        <img src={check_f} 
                            className="checkbtn"
                            onClick={()=>{
                                onCheckToggle(id);
                            }}
                        />
                    }
                </div>
                <div className="todotext"><h3>{content}</h3></div>
                <div className="cancel"><img src={cancel_btn} onClick={()=>{onRemove(id)}}/></div>
            </div>
        </div>
        </div>
    )

}
export default ToDoItem