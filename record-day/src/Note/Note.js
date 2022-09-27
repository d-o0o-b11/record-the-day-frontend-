import React from "react";
import "./Note.css"
import icon7 from "../img/icon7.png"
import { useNavigate } from 'react-router-dom';

const Note = () =>{

    const navigate = useNavigate();
    const Write = () =>{
        navigate('/InsertWrite');
    }

    return(
        <>
        <div className="note_frame">
            <div className="note_icon_marg">
                <img src={icon7}/>
            </div>

            <h1>Note</h1>

            <button onClick={Write} className="note_listbtn">
                <h3>메모 추가</h3>
            </button>

           
            <div className="notelist_frame">
                <div className="note_list">
                    1
                </div>
                <div className="note_list">
                    2
                </div>
                <div className="note_list">
                    3
                </div>
                <div className="note_list">
                    4
                </div>
            </div>
        </div>
        </>
    )
}


export default Note