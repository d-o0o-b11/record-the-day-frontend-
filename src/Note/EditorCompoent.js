import React, {useState} from "react";
import "./NoteInsert.css"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';



const EditorCompoent = ({value, onChange}) => {


    const [show, setShow] = useState('')

    console.log(show)

    return(
           <>
                <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                height: 350,
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                borderRadius: '10px'
                            }}

                            value={show}

                            modules={{
                                toolbar: [
                                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }], [{size: []}],
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    [{'align': []}],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['link', "video", "code-block"],
                                    ['clean']
                                ],
                            }}
                            formats={[
                                'header', 'font', 'size',
                                'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                                'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                            ]}
                            onChange={(val) => {
                                setShow(val)
                            }}
                />
           </>
            
    )
}

export default EditorCompoent