import React from "react";
import "./Header.css"
import logo from "../../img/logo.png"

const Header = () =>{

    return(
        <div className="header_body">
       
        <img src={logo}/>

        <div className="flex-end">
            <h4 className="menu_font">To do list</h4>
            <h4 className="menu_font">Note</h4>
            <h4 className="menu_font">Login</h4>
            <h4 className="menu_font">Sign Up</h4>
        </div>

        </div>
    )
}


export default Header