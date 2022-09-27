import React ,{useState, useEffect} from "react";
import "./Template.css"
import icon8 from "../img/icon8.png"
import ToDoList from "./ToDoList";
import ToDoInsert from "./ToDoInsert";


let nextId =4;
const Template = () =>{

    const [message, setMessage]=useState([]);
        useEffect(()=>{
            fetch("/ToDoList")
                .then((res)=>{
                return res.json();
                })
                .then((data)=>{
                    setMessage(data);
                });
        },[]);

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

    const [todos,setTodos]=useState([
        {
            id:1,
            text:"할일 1",
            checked : "true"
        },
        {
            id:2,
            text:"할일 2",
            checked : "false"
        },
        {
            id:3,
            text:"할일 3",
            checked : "false"
        },
    ])

    const onInsertTodo = (text)=>{
        if(text === ""){
            return alert('할 일을 입력해주세요')
        }
        else{
            const todo={
                id: nextId,
                text,
                checked: false
            }
            setTodos(todos => todos.concat(todo));
            nextId++;
            // push함수 = 해당 배열 자체가 변경
            // concat = 새 배열이 리턴이 되고 기존 배열은 변경 안됨
        }
    }

    const onCheckToggle = (id) =>{
        setTodos(todos => todos.map(todo =>
            (todo.id === id ? {...todo, checked: !todo.checked}:
            todo
        )))
    }

    const onRemove = (id) =>{
        setTodos(todos => todos.filter(todo=>todo.id !== id))
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

                <h3>오늘의 할 일 - {todos.length}</h3>
                <ToDoList todos={todos} onCheckToggle={onCheckToggle} onRemove={onRemove}/>
            </div>    
        </>
    )
}


export default Template