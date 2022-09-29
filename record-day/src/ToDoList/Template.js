import React ,{useState, useEffect} from "react";
import "./Template.css"
import icon8 from "../img/icon8.png"
import ToDoList from "./ToDoList";
import ToDoInsert from "./ToDoInsert";
import axios from "axios";
import { getCookie, removeCookie } from "../util/cookie";


const PrintList = (url, token, count) => {
    const [data, setData] = useState([]);
    // const [count, setCount] = useState(0);
    
    
    const ListUrl = () => {
        axios({
            method: 'get',
            url: `${url}`,
            headers: {
                "X-AUTH-TOKEN": token
            }
        }).then((Response)=>{
            // console.log(Response.data)
            setData(Response.data)   
        }
        ).catch((error)=>{
            alert("실패하였습니다.")
            console.log(token)
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

const Template = () =>{

    // const token2 = localStorage.getItem('token2')
    const token = getCookie('token');
    const [count, setCount] = useState(0);
    const data = PrintList(`https://cloudwi.herokuapp.com/todo`, token, count);

    const [todolist, SetToList] = useState();

    const onChangeAccount = (e) => {
        SetToList(e.target.value);
        console.log(todolist)
    };
    
    const [insertToggle, setInertToggle] = useState(false);

    const onInsertToggle = ()=>{
        setInertToggle(prev => !prev);
        // prev = 이전값
    } 

    const [todos,setTodos]=useState([])

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
        // setTodos(todos => todos.map(todo =>
        //     (todo.id === id ? {...todo, checked: !todo.checked}:
        //     todo
        // )))
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
        // setTodos(todos => todos.filter(todo=>todo.id !== id))
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

                <h1>To Do List</h1>

                {insertToggle && <ToDoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo}/>}

                <button onClick={onInsertToggle} className="main_listbtn">
                    <h3>일정 추가</h3>
                </button>

                <h3>오늘의 할 일 - {data.length}</h3>
                <ToDoList todos={data} onCheckToggle={onCheckToggle} onRemove={onRemove}/>
            </div>    
        </>
    )
}


export default Template