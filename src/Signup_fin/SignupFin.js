import React from "react";
import "./SignupFin.css";
import { useNavigate } from "react-router-dom";

const SingupFin = () => {
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="fin_frame">
      <div className="fin_text">
        <span>๐</span>
        <h1>'ํ๋ฃจ๋ฅผ ๊ธฐ๋กํ๋ค'์ ์ค์  ๊ฒ์ ํ์ํฉ๋๋ค!</h1>
        <h3>โ ์ค์ํ ์ฌํญ๋ค์ ๋ฉ๋ชจํด๋ณด์ธ์!</h3>
        <h3>โ ์ค๋ ํด์ผํ  ์ผ๋ค์ ์ ๋ฆฌํด๋ณด์ธ์!</h3>
        <button onClick={gotoLogin}>๋ก๊ทธ์ธ ๋ฐ๋ก๊ฐ๊ธฐ</button>
      </div>
    </div>
  );
};

export default SingupFin;
