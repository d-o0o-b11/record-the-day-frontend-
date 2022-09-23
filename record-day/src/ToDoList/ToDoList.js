import React ,{useState, useEffect} from "react";
import "./ToDoList.css"
import icon8 from "../img/icon8.png"

const ToDoList = () =>{

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
    
    // const add_list = () => {
        
    // }

    return(
        <>
         {/* <ul>
          {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul> */}

            <div className="todolist_frame">
                <div className="todolist_icon_marg">
                    <img src={icon8}/>
                </div>

                <h1>To Do List</h1>

                <div>
                    <input 
                        className="list_input" 
                        placeholder="추가 일정"
                        id="list"
                        onChange={onChangeAccount}/>
                </div>

                <button>
                    <h3>일정 추가</h3>
                </button>

                <div className="insert_list">
                    <input type="checkbox"/>
                    <h3>오늘 방청소하자</h3>
                </div>
            </div>    
        </>
    )
}


export default ToDoList