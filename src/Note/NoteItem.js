import React from "react";
import cancel_btn from "../img/cancel_btn.png"
import "./Note.css"
import "./NoteItem.css"

const NoteItem = ({notes, onRemove})=>{
    const {id, content, checkTodo} = notes;

    return(
        <div className="notelist_frame">
                <div className="note_list">
                    <h3 className="content_text" dangerouslySetInnerHTML={ {__html: content} }></h3>
                </div>
        </div>
    )

}
export default NoteItem