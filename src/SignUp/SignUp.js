import React, { useState, useEffect, useCallback } from "react";
import "./SignUp.css";
import icon6 from "../img/icon6.png";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../modules/userAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState("");
  const [Nickname, SetNickname] = useState("");
  const [Password, SetPassword] = useState("");

  const [PasswordCheck, SetPasswordCheck] = useState(true);
  const [EmailCheck, SetEmailCheck] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  useEffect(() => {
    // console.log('이메일 유효성 검사 :: ',EmailCheck)
  }, [PasswordCheck, EmailCheck]);

  const onChangeEmail = (e) => {
    SetEmail(e.target.value);

    var regExp =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    SetEmailCheck(regExp.test(e.target.value));
  };

  const onChangePassword = (e) => {
    SetPassword(e.target.value);

    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    SetPasswordCheck(regExp.test(e.target.value));
  };

  const onChangeNickname = (e) => {
    SetNickname(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") submit();
  };

  const navigate = useNavigate();
  // const Indexid = useSelector((state)=>state.userAction.register)

  const submit = () => {
    if (Email === "" || !EmailCheck) {
      alert("이메일을 입력해주세요");
    } else if (Password === "" || !PasswordCheck) {
      alert("비밀번호를 다시 입력해주세요");
    } else if (Nickname === "") {
      alert("닉네임을 입력해주세요");
    } else {
      let body = {
        email: Email,
        password: Password,
        nickname: Nickname,
      };
      dispatch(registerUser(body)).then((res) => {
        if (res.payload.id > 0) {
          alert("회원가입이 완료되었습니다.");
          navigate("/Login");
        } else {
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
        <div className="signup_frame">
          <div className="icon_marg">
            <img src={icon6} />
          </div>

          <h1>회원가입</h1>

          <div>
            <input
              id="email"
              name="email"
              placeholder="Email"
              onChange={onChangeEmail}
            />
          </div>
          {EmailCheck ? (
            <></>
          ) : (
            <h5
              style={{
                color: "gray",
                margin: "0 0 20px 0",
                fontStyle: "italic",
              }}>
              이메일 형식이 올바르지 않습니다.
            </h5>
          )}
          <div>
            <input
              id="password"
              name="Password"
              type="password"
              placeholder="PassWord"
              onChange={onChangePassword}
            />
          </div>
          {PasswordCheck ? (
            <></>
          ) : (
            <h5
              style={{
                color: "gray",
                margin: "0 0 20px 0",
                fontStyle: "italic",
              }}>
              영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 6자 ~
              20자여야 합니다.
            </h5>
          )}

          <div>
            <input
              id="nickname"
              name="nickname"
              placeholder="NickName"
              onChange={onChangeNickname}
              onKeyPress={onKeyPress}
            />
          </div>

          <button onClick={submit}>
            <h3>SignUp</h3>
          </button>
        </div>
      )}
    </>
  );
};

export default SignUp;
