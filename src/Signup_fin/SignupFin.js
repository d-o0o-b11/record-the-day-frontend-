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
        <span>📚</span>
        <h1>'하루를 기록하다'에 오신 것을 환영합니다!</h1>
        <h3>✔ 중요한 사항들을 메모해보세요!</h3>
        <h3>✔ 오늘 해야할 일들을 정리해보세요!</h3>
        <button onClick={gotoLogin}>로그인 바로가기</button>
      </div>
    </div>
  );
};

export default SingupFin;
