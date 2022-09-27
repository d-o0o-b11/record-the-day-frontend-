import React, {useState} from "react";
import "./NoteInsert.css"
import {useQuill} from 'react-quilljs';
import "react-quill/dist/quill.snow.css";



const EditorCompoent = ({value, onChange}) => {

    const {quill, quillRef} = useQuill();

    return(
           <>
                <div style={{width: 500 , height: 300}}>
                    <div ref={quillRef}/>
                </div>
           </>
            
    )
}

export default EditorCompoent