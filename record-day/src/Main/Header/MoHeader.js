import React,{useState} from 'react';
import "./MoHeader.css"
import menu_btn from "../../img/menu_btn.png"
// import {Link} from "react-router-dom";
  
const MoHeader = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    // const [toggleBar, setToggleBar] = useState(true)

    // const toggleChange = () => {
    //     setToggleMenu(!toggleMenu)
    //     setToggleBar(!toggleBar)
    //     console.log(toggleMenu)
    //   }
    


  return(
      <div className="mo_header">
        <img src={menu_btn} onClick={()=>(setToggleMenu(!toggleMenu))} className="ham_menu"/>

        { toggleMenu &&
        <>
        
          <div className="emphasized">
            
              <div className="label sidebar" >

                    {/* <Link to="/stitle" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm">게시판</h5>
                    </Link>

          
                    <Link to="/chat" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm">채팅</h5>
                    </Link>


                    <Link to="/Annview" onClick={toggleChange} style={{ textDecoration: 'none', color:'black' }}>
                      <h5 className="st mm">공지사항</h5>
                    </Link> */}
                    <img src={menu_btn} onClick={()=>(setToggleMenu(!toggleMenu))} style={{cursor:"pointer"}}/>
              <h1>fdfd</h1>
              <h2>dfd</h2>
                
                
            </div>
          </div>
          </>
        }
      </div>
  )




}

export default MoHeader