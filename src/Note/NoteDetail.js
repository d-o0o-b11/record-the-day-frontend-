import React, {useState, useEffect} from "react";
import "./NoteDetail.css"
import axios from "axios";
import { getCookie } from "../util/cookie";
import { useParams, Link } from "react-router-dom"

const PrintList = (url, token, id) => {
    const [data, setData] = useState([]);
    
    const ListUrl = () => {
        axios({
            method: 'get',
            url: `${url}/${id}`,
            headers: {
                "X-AUTH-TOKEN": token
            }
        }).then((Response)=>{
            setData(Response.data)   
        }
        ).catch((error)=>{
            alert("실패하였습니다.")
        })

       
    }
    useEffect(() => { //한번만 실행
        ListUrl();
    }, []);

    return data;
  }



const NoteDetail = () =>{

    const { id } = useParams()

    const token = getCookie('token');
    const data = PrintList(`https://cloudwi.herokuapp.com/note`, token, id);

    return(
        <>
            <div className="notedetail_frame">
                <h1>제목: {data.title}</h1>
            <hr/>

            <h3 dangerouslySetInnerHTML={ {__html: data.content} }></h3>

            </div>

            <div className="notedetail_frame2">
                
                    <button>
                        <Link to={ `/edit/${id}`} style={{ textDecoration: 'none', color: 'black'}}>
                            수정
                        </Link>
                    </button>
                    <button>삭제</button>
                
            </div>
        </>
    )
}

export default NoteDetail