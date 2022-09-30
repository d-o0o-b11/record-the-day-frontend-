import React, {useState} from "react";
import "./NoteInsert.css"
import icon3 from "../img/icon3.png"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { getCookie, removeCookie } from "../util/cookie";

const NoteInsert = () =>{

    const token = getCookie('token');

    const [account, setAccount] = useState({
        title: "",
        content: "",
    });
    const [title, SetTitle] = useState("")
    const [impoColor, SetimporColor] = useState("")
    const [content, SetContent] = useState("")

    const onChangeTitle = (e) => {
        SetTitle(e.target.value)
    };

    const onChangeColor = (e) =>{
        SetimporColor(e.target.value)
    }

    const onChangeContent = (value) =>{
        SetContent(value)
    }

    const onInsertList = ()=>{
        if(title === ""){
            return alert('제목을 입력해주세요')
        }
        else if(content === ""){
            return alert("내용을 입력해주세요")
        }
        else if(impoColor === ""){
            return alert("중요도를 선택해주세요")
        }
        else{

            console.log(token)

            axios({
                method: 'post',
                url: 'https://cloudwi.herokuapp.com/note',
                headers: {
                    "X-AUTH-TOKEN": token
                },
                data: {
                    title: title,
                    content: content,
                    importance: impoColor,
                },
            })
            .then((Response)=>{
                console.log("tjdrhd")
            }
            )
        }
    }


// console.log("제목: "+ title)
// console.log("내용: "+ content)

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
                    onChange={onChangeTitle}
                />
            </div>

            <div className="import_frame">
                <h4>중요도</h4>

                <div className="importance_color import_margin">
                    <input type="radio" value="#ffffff" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#F5333E" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#FF9D16" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#FFD336" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#6FD44A" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#3FA8F5" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#5D6DBE" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>

                    <input type="radio" value="#FF57DA" onClick={onChangeColor} name="color"/>
                    <label className="importance_color"></label>
                </div>
            </div>

            <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                // height: '550px',
                                marginTop: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                borderRadius: '10px'
                            }}

                            id="content" 
                            name="content"
                            value={content}

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
                            onChange={onChangeContent}
            />


            <div className="write_btn_wrapper">
                <button className="write_btn" onClick={onInsertList}>
                    <h3>글 작성</h3>
                </button>
            </div>

            </div>

        </>
    )
}

export default NoteInsert