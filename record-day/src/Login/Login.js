import React, {useState, useEffect} from "react";
import "./Login.css"
import icon5 from "../img/icon5.png"
import axios from "axios"

const Login = () =>{
    const [account, setAccount] = useState({
        id: "",
        password: "",
    });
    
      //input에 입력될 때마다 account state값 변경되게 하는 함수
    const onChangeAccount = (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    axios({
        method:'post',
        url:'/account/login',
        data:{
            userid :account.id,
            password:account.password
        }
    })

    console.log(account)

    return(
        <div className="login_frame">
                <div className="login_icon_marg">
                    <img src={icon5}/>
                </div>

                <h1>로그인</h1>
                
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

                <button>
                    <h3>Login</h3>
                </button>
            </div>
    )
}


export default Login