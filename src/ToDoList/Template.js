import React ,{useState, useEffect} from "react";
import "./Template.css"
import icon8 from "../img/icon8.png"
import ToDoList from "./ToDoList";
import ToDoInsert from "./ToDoInsert";
import axios from "axios";
import { getCookie } from "../util/cookie";
import Pagination from "../Pagination";


const PrintList = (url, token, count, count_p) => {
    const [data, setData] = useState([]);
    const [pagecount, setPageCount] = useState(0)
    
    const ListUrl = () => {
        axios({
            method: 'get',
            url: `${url}`,
            headers: {
                "X-AUTH-TOKEN": token
            }
        }).then((Response)=>{
            setData(Response.data)  
            console.log(data) 
        }
        ).catch((error)=>{
            alert("실패하였습니다.")
        })
        
        axios({
            method:'get',
            url: 'https://cloudwi.herokuapp.com/todo/count',
            headers: {
                "X-AUTH-TOKEN": token
            }
        }).then((Response)=>{
            setPageCount(Response.data)  
            console.log(data) 
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

    useEffect(() => { //page 변할 때 마다 실행
        ListUrl();
    }, [count_p]);

    return [data,pagecount];
  }

const Template = () =>{

    const token = getCookie('token');
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [count_p, setCount_p]=useState(0);
    const data = PrintList(`https://cloudwi.herokuapp.com/todo?page=${page}`, token, count, count_p);

    
console.log(data)

    const [insertToggle, setInertToggle] = useState(false);

    const onInsertToggle = ()=>{
        setInertToggle(prev => !prev);
        // prev = 이전값
    } 

    const onInsertTodo = (text)=>{
        if(text === ""){
            return alert('할 일을 입력해주세요')
        }
        else{

            console.log(token)

            axios({
                method: 'post',
                url: 'https://cloudwi.herokuapp.com/todo',
                headers: {
                    "X-AUTH-TOKEN": token
                },
                data: {
                    content: text
                },
            })
            .then((Response)=>{
                setCount(count+1);
            }
            )
        }
    }

    const onCheckToggle = (id) =>{
        axios({
            method: 'put',
            url: 'https://cloudwi.herokuapp.com/todo',
            headers: {
                "X-AUTH-TOKEN": token
            },
            data: {
                id: id
            },
        }).then((Response)=>{
            setCount(count+1);
        }
        ).catch((error)=>{
            alert("실패하였습니다.")
        })
    }

    const onRemove = (id) =>{
        axios({
            method: 'delete',
            url: 'https://cloudwi.herokuapp.com/todo',
            headers: {
                "X-AUTH-TOKEN": token
            },
            data: {
                id: id
            },
        })
        .then((Response)=>{
            console.log(token)
            setCount(count+1);
        }
        ).catch((error)=>{
            console.log(token)
        })
    }

    return(
        <>

            <div className="todolist_frame">
                <div className="todolist_icon_marg">
                    <img src={icon8}/>
                </div>

                <h1>To Do List </h1>

                {insertToggle && <ToDoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}/>}

                <button onClick={onInsertToggle} className="main_listbtn">
                    <h3>일정 추가</h3>
                </button>

                <h3>오늘의 할 일 - {data[1]}</h3>
                <ToDoList todos={data[0]} onCheckToggle={onCheckToggle} onRemove={onRemove}/>

                <Pagination
                    total={data[1]}
                    limit='9'
                    page={page}
                    setPage={setPage}
                    setcount_p={setCount_p}
                />
            </div>    
        </>
    )
}


export default Template