import React, {useState} from "react";
import "./NoteInsert.css"
import icon3 from "../img/icon3.png"
import EditorCompoent from "./EditorCompoent";


const NoteInsert = () =>{

    const [account, setAccount] = useState({
        title: "",
        content: "",
    });

    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    console.log(account.title);


    return(
        <>
            <div className="write_frame">
                <div className="write_icon_marg">
                    <img src={icon3}/>
                </div>

            <div>
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    placeholder="Title" 
                    maxlength="50"
                    className="write_input"
                    onChange={onChangeAccount}
                />
            </div>

            </div>

            <div className="quill_frame">
                <EditorCompoent value={account.content} onChange={onChangeAccount}/>
            </div>
        </>
    )
}

export default NoteInsert