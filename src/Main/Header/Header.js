import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie } from "../../util/cookie";
import { setLogout } from "../../modules/Logincheck";
import { TimeSet } from "../../modules/userAction";

const Header = () => {
  const uname = getCookie("username");
  const isLogin = useSelector((state) => state.Logincheck.isLogin);
  const checkLogin = useSelector((state) => state.Logincheck.checklogin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutClick = () => {
    removeCookie("username");
    dispatch(setLogout());
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
    <div className="header_body">
      <Link to="/" className="link_color">
        <img src={logo} />
      </Link>

      <div className="flex-end">
        <span onClick={Need_Login_todo} className="link_color">
          <h4 className="menu_font yellow underline">To do list</h4>
        </span>
        <span onClick={Need_Login_note} className="link_color">
          <h4 className="menu_font yellow underline">Note</h4>
        </span>

        {isLogin && (
          <>
            <h4 className="menu_font yellow underline">{uname}님</h4>
            <h4 className="menu_font yellow underline" onClick={logoutClick}>
              LogOut
            </h4>
          </>
        )}
        {isLogin || (
          <>
            <Link to="/Login" className="link_color">
              <h4 className="menu_font yellow underline">Login</h4>
            </Link>
            <Link to="/SignUp" className="link_color">
              <h4 className="menu_font yellow underline">Sign Up</h4>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
