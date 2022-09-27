import React from "react";
import {MdCheckBox , MdCheckBoxOutlineBlank} from "react-icons/md"
import "./ToDoItem.css"
import "./Template.css"
import check_f from "../img/check(false).png"
import check_t from "../img/check(true).png"
import cancel_btn from "../img/cancel_btn.png"

const ToDoItem = ({todo, onCheckToggle, onRemove})=>{
    const {id, text, checked} = todo;
    // console.log(onCheckToggle(1));
    return(
        <> 
        <div className="insert_list">
            <div className={`content ${checked ? 'checked_list' : ""}`}>
                <div className="margin_btn">
                    {checked? 
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
                <div className="todotext"><h3>{text}</h3></div>
                <div className="cancel"><img src={cancel_btn} onClick={()=>{onRemove(id)}}/></div>
            </div>
        </div>
        </>
    )

}
export default ToDoItem