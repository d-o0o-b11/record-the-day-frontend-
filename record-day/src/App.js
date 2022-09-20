import {Container} from "react-bootstrap";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import React, { useState } from "react";
import { Input,Row, Col  } from "antd"
import './App.css';
import Header from "./Main/Header/Header"
import Fin_Main from "./Main/FIn_Main"
import Main from "./Main/Main"

const App = ()=>{

  return (
    <div>
      <Fin_Main/>
      <Main/>
    </div>
  );

}

export default App;
