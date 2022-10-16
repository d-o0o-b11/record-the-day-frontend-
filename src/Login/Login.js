import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import icon5 from "../img/icon5.png";

import { useNavigate } from "react-router-dom";

import { getCookie, setCookie } from "../util/cookie";
import { useDispatch, useSelector } from "react-redux";
import { goToHome, setLogin } from "../modules/Logincheck";
import Loading from "../Loading/Loading";

import { loginUser } from "../modules/userAction";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  //input에 입력될 때마다 account state값 변경되게 하는 함수
  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") login();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (account.email === "") {
      alert("아이디를 입력해주세요");
    } else if (account.password === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      let body = {
        email: account.email,
        password: account.password,
      };
      setLoading(true);
      dispatch(loginUser(body)).then((res) => {
        if (res.payload.nickname) {
          setCookie("token", res.payload.token); // 쿠키에 토큰 저장
          let expires = new Date(); //30분 저장
          expires.setMinutes(expires.getMinutes() + 30);
          setCookie("username", res.payload.nickname, { path: "/", expires });
          localStorage.setItem("time", expires.toUTCString());
          dispatch(setLogin());
          dispatch(goToHome(navigate));
        } else {
          setLoading(false);
          alert(res.payload);
        }
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login_frame">
          <div className="login_icon_marg">
            <img src={icon5} />
          </div>

          <h1>로그인</h1>

          <div>
            <input
              id="email"
              name="email"
              placeholder="Email"
              onChange={onChangeAccount}
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="PassWord"
              onChange={onChangeAccount}
              onKeyPress={onKeyPress}
            />
          </div>

          <button onClick={login}>
            <h3>Login</h3>
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
