import React from "react";
import { Link } from 'react-router-dom';

import "./Note.css"
import "./NoteItem.css"

const NoteItem = ({notes, onRemove})=>{
    const {id, title, importance} = notes;

    return(
        <Link to={{
            pathname:"/detail",
            search:`?board_id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>
            <div className="notelist_frame">
                    <div className="note_list" style={{borderColor : importance}}>
                        <h3 className="content_text" dangerouslySetInnerHTML={ {__html: title} }></h3>
                    </div>
            </div>
        </Link>
    )

}
export default NoteItem