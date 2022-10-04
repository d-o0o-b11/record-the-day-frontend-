import React from "react";
import { Link } from 'react-router-dom';

import "./Note.css"
import "./NoteItem.css"

const NoteItem = ({notes, onRemove})=>{
    const {id, title, importance, modifiedDate, content} = notes;

    return(
        
          
                <Link to={
                    `/detail/${id}`
                } style={{ textDecoration: 'none', color: 'black'}}>

                    <div className="note_list" style={{borderColor : importance}}>
                        <h5>{modifiedDate.substr(0,10)}</h5>
                        <h3 className="content_text" dangerouslySetInnerHTML={ {__html: title} }></h3>    
                    </div>
                    
                </Link>
           
        
    )

}
export default NoteItem