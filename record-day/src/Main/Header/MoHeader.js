import React,{useState} from 'react';
import "./MoHeader.css"
import menu_btn from "../../img/menu_btn.png"
import cancel_btn from "../../img/cancel_btn.png"
import logo from "../../img/logo.png"
// import {Link} from "react-router-dom";
  
const MoHeader = () => {

    const [toggleMenu, setToggleMenu] = useState(false)


  return(
      <div className="mo_header">
        <img src={menu_btn} onClick={()=>(setToggleMenu(!toggleMenu))} className="ham_menu"/>
        <div className='mo_logo_po'>
          <img src={logo} className="mo_logo"/>
        </div>

        { toggleMenu &&
          <>
          
            <div className='menu_container'>
              <div className='check'>

                <div className='menu_sidebar'>
                  <img src={cancel_btn} onClick={()=>(setToggleMenu(!toggleMenu))} className="cancel_btn"/>
                  <span className='area_desc'>
                    <h2>Main</h2>
                    <h2>To do List</h2>
                    <h2>Note</h2>
                    <h2>Login</h2>
                    <h2>Sing Up</h2>
                  </span>
                </div>

                <div className='menu_lo_frame'>
                  <img src={logo} className="menu_logo"/>
                </div>

              </div>
            </div>

          </>
        }
      </div>
  )




}

export default MoHeader