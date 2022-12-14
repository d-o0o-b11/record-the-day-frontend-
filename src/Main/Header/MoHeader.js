import React, { useState, useEffect } from "react";
import "./MoHeader.css";
import menu_btn from "../../img/menu_btn.png";
import cancel_btn from "../../img/cancel_btn.png";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie } from "../../util/cookie";
import { setLogout } from "../../modules/Logincheck";
import { TimeSet } from "../../modules/userAction";

const MoHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const uname = getCookie("username");
  const isLogin = useSelector((state) => state.Logincheck.isLogin);
  const checkLogin = useSelector((state) => state.Logincheck.checklogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutClick = () => {
    removeCookie("username");
    dispatch(setLogout());
    Setlogincount(0);
    navigate("/");
  };

  const Need_Login_todo = () => {
    if (!isLogin) {
      alert("로그인 후 사용가능합니다.");
      navigate("/Login");
    } else {
      navigate("/ToDoList");
    }
  };

  const Need_Login_note = () => {
    if (!isLogin) {
      alert("로그인 후 사용가능합니다.");
      navigate("/Login");
    } else {
      navigate("/Note");
    }
  };

  const ListUrl = () => {
    if (dispatch(TimeSet).payload && checkLogin === "yes") {
      removeCookie("username");
      dispatch(setLogout());
      Setlogincount(0);
      navigate("/");
      alert("로그인 세션이 종료되었습니다.");
    }
  };

  const [logincount, Setlogincount] = useState(0);

  useEffect(() => {
    if (logincount > 0) {
      ListUrl();
    }
  }, []);

  useEffect(() => {}, [isLogin]);

  return (
    <div className="mo_header">
      <img
        src={menu_btn}
        onClick={() => setToggleMenu(!toggleMenu)}
        className="ham_menu"
      />
      <div className="mo_logo_po">
        <img src={logo} className="mo_logo" />
      </div>

      {toggleMenu && (
        <>
          <div className="menu_container">
            <div className="header_frame">
              <div className="check">
                <div className="menu_sidebar">
                  <img
                    src={cancel_btn}
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className="cancel_btn"
                  />
                  <span className="area_desc">
                    <Link
                      to="/"
                      className="link_color"
                      onClick={() => setToggleMenu(!toggleMenu)}>
                      <h2 className="yellow underline">Main</h2>
                    </Link>

                    <span
                      to="/ToDoList"
                      className="link_color"
                      onClick={() => {
                        setToggleMenu(!toggleMenu);
                        Need_Login_todo();
                      }}>
                      <h2 className="yellow underline">To do List</h2>
                    </span>

                    <span
                      to="/Note"
                      className="link_color"
                      onClick={() => {
                        setToggleMenu(!toggleMenu);
                        Need_Login_note();
                      }}>
                      <h2 className="yellow underline">Note</h2>
                    </span>

                    {isLogin && (
                      <>
                        <h2 className="yellow underline">{uname}님</h2>
                        <h2
                          className="yellow underline"
                          onClick={() => {
                            logoutClick();
                            setToggleMenu(!toggleMenu);
                          }}>
                          LogOut
                        </h2>
                      </>
                    )}

                    {isLogin || (
                      <>
                        <Link
                          to="/Login"
                          className="link_color"
                          onClick={() => setToggleMenu(!toggleMenu)}>
                          <h2 className="yellow underline">Login</h2>
                        </Link>

                        <Link
                          to="/SignUp"
                          className="link_color"
                          onClick={() => setToggleMenu(!toggleMenu)}>
                          <h2 className="yellow underline">Sing Up</h2>
                        </Link>
                      </>
                    )}
                  </span>
                </div>

                <div className="menu_lo_frame">
                  <img src={logo} className="menu_logo" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MoHeader;
