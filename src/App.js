import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React from "react";
import PC_Header from "./Main/Header/Header"
import Mobile_Header from "./Main/Header/MoHeader"
import Main from "./Main/Main"
import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"
import ToDoList from "./ToDoList/ToDoList"
import Template from "./ToDoList/Template"
import Note from "./Note/Note"

import {Mobile, Pc} from "../src/Media/MediaQuery"
import NoteInsert from "./Note/NoteInsert";



const App = ()=>{

  return (
    <BrowserRouter>
      {/* pc_header */}
        <Pc>
            <PC_Header/>
        </Pc>

        {/* mobile_header */}
        <Mobile>
            <Mobile_Header/>
        </Mobile>

        <Routes>
            {/* 메인 */}
            <Route path="/" element={<Main/>}/>

            {/* 로그인 */}
            <Route path="/Login" element={<Login/>}/>

            {/* 회원가입 */}
            <Route path="/SignUp" element={<SignUp/>}/>

            {/* ToDoList */}
            <Route path="/ToDoList" element={<Template/>}/>

            {/* Note */}
            <Route path="/Note" element={<Note/>}/>

            <Route path="/InsertWrite" element={<NoteInsert/>} />

           
        </Routes>
    </BrowserRouter>
  );

}

export default App;