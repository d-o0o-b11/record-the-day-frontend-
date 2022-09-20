import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import logo from "../../img/logo.png"

const Header = () =>{

    return(
        <div className="header_body">
       
        <Link to="/" className="link_color"><img src={logo}/></Link>

        <div className="flex-end">
            <Link to="/ToDoList" className="link_color"><h4 className="menu_font yellow underline">To do list</h4></Link>
            <Link to="/Note" className="link_color"><h4 className="menu_font yellow underline">Note</h4></Link>
            <Link to="/Login" className="link_color"><h4 className="menu_font yellow underline">Login</h4></Link>
            <Link to="/SignUp" className="link_color"><h4 className="menu_font yellow underline">Sign Up</h4></Link>
        </div>

        </div>
    )
}


export default Header