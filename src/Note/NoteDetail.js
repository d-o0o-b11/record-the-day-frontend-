import React, {useState, useEffect} from "react";
import "./NoteDetail.css"
import qs from 'qs';
import axios from "axios";
import { getCookie } from "../util/cookie";

const PrintList = (url, token, id) => {
    const [data, setData] = useState([]);
    
    const ListUrl = () => {
        axios({
            method: 'get',
            url: `${url/id}`,
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



const NoteDetail = ({location}) =>{

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    console.log(query);

    const token = getCookie('token');
    const data = PrintList(`https://cloudwi.herokuapp.com/note`, token, query.id);

    return(
        <>
        <h1>제목: {data.title}</h1>
        <hr></hr>

        <h3 dangerouslySetInnerHTML={ {__html: data.content} }></h3>

        <button>목록으로 돌아가기</button>
        </>
    )
}

export default NoteDetail