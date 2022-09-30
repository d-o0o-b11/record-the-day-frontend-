import React, {useState} from "react";
import "./SignUp.css"
import icon6 from "../img/icon6.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{

    const [account, setAccount] = useState({
        email: "",
        password: "",
        nickname:"",
    });
    
      //input에 입력될 때마다 account state값 변경되게 하는 함수
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    //   console.log(account)
    const navigate = useNavigate();
    const submit = ()=>{
        

        if(account.email===""){
            alert("이메일을 입력해주세요")
        }
        else if(account.password===""){
            alert("비밀번호를 입력해주세요")
        }
        else if(account.nickname===""){
            alert("닉네임을 입력해주세요")
        }
        else{
            axios({
                method:'post',
                url:'https://cloudwi.herokuapp.com/member',
                data:{
                    email :account.email,
                    password:account.password,
                    nickname:account.nickname
                }
            })
            .then((Response)=>{
                console.log(Response.data);
                alert("회원가입이 완료되었습니다.");
                navigate('/Login');
              })
              .catch((error)=>{
                alert("회원가입 실패, 다시 시도해주세요")
              });
        }

    }


    return(
            <div className="signup_frame">
                <div className="icon_marg">
                    <img src={icon6}/>
                </div>

                <h1>회원가입</h1>
                
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
                    />
                </div>
                <div>
                    <input
                        id="nickname"
                        name="nickname"
                        placeholder="NickName"
                        onChange={onChangeAccount}
                    />
                </div>
                
                <h6>비밀번호</h6>
                <h6 style={{color:"red"}}>* 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 6자 ~ 20자여야 합니다.</h6>
                <button onClick={submit}>
                    <h3>SignUp</h3>
                </button>
            </div>
    )
}


export default SignUp