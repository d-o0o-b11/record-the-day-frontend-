import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import { getCookie } from "../util/cookie";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

// const PrintList = (url, token, id) => {
//     const [data, setData] = useState([]);
    
//     const ListUrl = () => {
//         axios({
//             method: 'get',
//             url: `${url}/${id}`,
//             headers: {
//                 "X-AUTH-TOKEN": token
//             }
//         }).then((Response)=>{
//             setData(Response.data)   
//             console.log(Response.data)
//         }
//         ).catch((error)=>{
//             alert("실패하였습니다.")
//         })

       
//     }
//     useEffect(() => { //한번만 실행
//         ListUrl();
//     }, []);

//     return data;
//   }



const EditBoard = () => {
  const navigate = useNavigate();
  // URI 파라미터 가져오기
  const {id} = useParams();
  const token = getCookie('token');



  const [title, SetTitle] = useState("");
  const [impoColor, SetimporColor] = useState("")
  const [content, SetContent] = useState("");
  
  useEffect(() => {
    const getBoard = async () => {
      const {data} = await axios({
        method: 'get',
        url: `https://cloudwi.herokuapp.com/note/${id}`,
        headers: {
            "X-AUTH-TOKEN": token
        }
    })

      return data;
    }
    getBoard().then((result) => {
      SetTitle(result.title);
      SetContent(result.content);
      SetimporColor(result.importance)
    });
  }, [])


  const onChangeTitle = (e) => {
    SetTitle(e.target.value)
};

const onChangeContent = (value) =>{
    SetContent(value)
}

console.log(title)

const onChangeColor = (e) =>{
    SetimporColor(e.target.value)
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
            method: 'put',
            url: `https://cloudwi.herokuapp.com/note`,
            headers: {
                "X-AUTH-TOKEN": token
            },
            data: {
                id: id,
                title: title,
                content: content,
                importance: impoColor,
            },
        })
        .then((Response)=>{
            alert("글이 변경되었습니다.")
            navigate('/Note')
        }
        )
    }
}

  return (
        <>
        <div className="write_frame">

        <div>
            <input 
                type="text" 
                id="title" 
                name="title"
                placeholder="Title" 
                maxlength="50"
                className="write_input"
                defaultValue = {title}
                onChange={onChangeTitle}
            />
        </div>

        <div className="import_frame">
            <h4>중요도</h4>

            <div className="importance_color import_margin">
                <input type="radio" value="#000000" onClick={onChangeColor} name="color" checked={impoColor === "#000000"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#F5333E" onClick={onChangeColor} name="color" checked={impoColor === "#F5333E"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#FF9D16" onClick={onChangeColor} name="color" checked={impoColor === "#FF9D16"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#FFD336" onClick={onChangeColor} name="color" checked={impoColor === "#FFD336"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#6FD44A" onClick={onChangeColor} name="color" checked={impoColor === "#6FD44A"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#3FA8F5" onClick={onChangeColor} name="color" checked={impoColor === "#3FA8F5"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#5D6DBE" onClick={onChangeColor} name="color" checked={impoColor === "#5D6DBE"}/>
                <label className="importance_color"></label>

                <input type="radio" value="#FF57DA" onClick={onChangeColor} name="color" checked={impoColor === "#FF57DA"}/>
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
                        value = {content}

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
  );
}

export default EditBoard;