import React from "react";
import {MdCheckBox , MdCheckBoxOutlineBlank} from "react-icons/md"
import "./ToDoItem.css"
import "./Template.css"
import check_f from "../img/check(false).png"
import check_t from "../img/check(true).png"

const ToDoItem = ({todo, onCheckToggle})=>{
    const {id, text, checked} = todo;
    // console.log(onCheckToggle(1));
    return(
        <> 
        <div className="insert_list">
            {/* <input type="checkbox"/> */}
            <div className={`content ${checked ? 'checked_list' : ""}`}>
                {/* {checked? 
                    <input type="checkbox" checked="y"/> : 
                    <input type="checkbox" checked="n"/> 
                } */}
                {/* <span>{checked}</span> */}
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
                {/* <h3>{text}</h3> */}
                {/* <div className="todotext">{text}</div> */}
            </div>
        </div>
        </>
    )

}
export default ToDoItem