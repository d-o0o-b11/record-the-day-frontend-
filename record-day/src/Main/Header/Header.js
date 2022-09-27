import React, {useEffect} from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import logo from "../../img/logo.png"


import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie } from "../../util/cookie";
import { setLogout } from "../../modules/Logincheck";

const Header = () =>{

    const uname = getCookie('username');
    const isLogin = useSelector(state=>state.Logincheck.isLogin);
    const dispatch = useDispatch();

    const logoutClick = () =>{
        removeCookie('username');
        dispatch(setLogout());
    }

    useEffect(()=>{},[isLogin]);

    return(
        <div className="header_body">
       
        <Link to="/" className="link_color"><img src={logo}/></Link>

        <div className="flex-end">
            <Link to="/ToDoList" className="link_color"><h4 className="menu_font yellow underline">To do list</h4></Link>
            <Link to="/Note" className="link_color"><h4 className="menu_font yellow underline">Note</h4></Link>
            
            {isLogin &&
                <>
                    <h4 className="menu_font yellow underline">{uname}님</h4>
                    <h4 className="menu_font yellow underline" onClick={logoutClick}>LogOut</h4>
                </>
            }
            {isLogin ||
                <>
                    <Link to="/Login" className="link_color"><h4 className="menu_font yellow underline">Login</h4></Link>
                    <Link to="/SignUp" className="link_color"><h4 className="menu_font yellow underline">Sign Up</h4></Link>
                </>
            }
            
        </div>

        </div>
    )
}


export default Header