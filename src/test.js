import React, { useState, useEffect, useRef } from "react";
import { getCookie, setCookie, removeCookie } from "./util/cookie";
import { setLogout } from "./modules/Logincheck";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Test = () => {
  let time = localStorage.getItem("time"); //로그인 시간
  let expires = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(time.slice(17, 25) > expires.toUTCString().slice(17, 25));

  let timeset = time.slice(17, 25) > expires.toUTCString().slice(17, 25);

  if (!timeset) {
    navigate("/");
    removeCookie("username");
    dispatch(setLogout());
    alert("로그인 세션이 종료되었습니다.");
  }
  return (
    <>
      <h3>로그인 시간+30: {time.slice(17, 25)}</h3>
      <h3>현재시간 : {expires.toUTCString().slice(17, 25)}</h3>
    </>
  );
};

export default Test;
