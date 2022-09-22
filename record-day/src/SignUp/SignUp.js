import React, {useState} from "react";
import "./SignUp.css"
import icon6 from "../img/icon6.png"
import axios from "axios"

const SignUp = () =>{

    const [account, setAccount] = useState({
        id: "",
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

    const submit = ()=>{
        axios({
            method:'post',
            url:'/account/register',
            data:{
                userid :account.id,
                password:account.password,
                nickname:account.nickname
            }
        })
        .then((Response)=>{
            console.log(Response.data);
          })
          .catch((error)=>{
            console.log(error);
          });
    }


    return(
            <div className="signup_frame">
                <div className="icon_marg">
                    <img src={icon6}/>
                </div>

                <h1>회원가입</h1>
                
                <div>
                    <input
                        id="id"
                        name="id"
                        placeholder="ID"
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

                <button onClick={submit}>
                    <h3>SignUp</h3>
                </button>
            </div>
    )
}


export default SignUp