import React, {useState, useEffect} from "react";
import "./Note.css"
import icon7 from "../img/icon7.png"
import NoteList from "./NoteList"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from "../util/cookie";

const PrintList = (url, token, count) => {
    const [data, setData] = useState([]);
    
    const ListUrl = () => {
        axios({
            method: 'get',
            url: `${url}`,
            headers: {
                "X-AUTH-TOKEN": token
            }
        }).then((Response)=>{
            setData(Response.data) 
            console.log(Response.data)
        }
        ).catch((error)=>{
            alert("실패하였습니다.")
        })

       
    }
    useEffect(() => { //한번만 실행
        ListUrl();
    }, []);

    useEffect(() => { //count 변할 때 마다 실행
        ListUrl();
    }, [count]);

    return data;
  }


const Note = () =>{

    const navigate = useNavigate();
    const Write = () =>{
        navigate('/InsertWrite');
    }

    const token = getCookie('token');
    const [count, setCount] = useState(0);
    const data = PrintList(`https://cloudwi.herokuapp.com/note`, token, count);


    const onRemove = (id) =>{
        axios({
            method: 'delete',
            url: 'https://cloudwi.herokuapp.com/note',
            headers: {
                "X-AUTH-TOKEN": token
            },
            data: {
                id: id
            },
        })
        .then((Response)=>{
            setCount(count+1);
        }
        ).catch((error)=>{
            alert("삭제 실패")
        })
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

            <NoteList notes={data} onRemove={onRemove}/>


        </div>
        </>
    )
}


export default Note