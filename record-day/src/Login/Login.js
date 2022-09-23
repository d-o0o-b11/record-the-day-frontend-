import React, {useState, useEffect} from "react";
import "./Login.css"
import icon5 from "../img/icon5.png"
import axios from "axios"


import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


import { loginUser } from '../api/Users';
import { setRefreshToken } from '../storage/Cookie';
import { SET_TOKEN } from '../store/Auth';

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

    // axios({
    //     method:'post',
    //     url:'/account/login',
    //     data:{
    //         userid :account.id,
    //         password:account.password
    //     }
    // })

    console.log(account)


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // useForm 사용을 위한 선언
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    // submit 이후 동작할 코드
    // 백으로 유저 정보 전달
    const onValid = async () => {
        // input 태그 값 비워주는 코드
        setValue("password", "");
        
        // 백으로부터 받은 응답
        const response = await loginUser(account.id, account.password);

        // console.log("userid:  "+ account.id)
        // console.log("passwod:  " +account.password)

        // console.log(userid)
        // console.log(password)

        if (response.status) {
            // 쿠키에 Refresh Token, store에 Access Token 저장
            setRefreshToken(response.json.refresh_token);
            dispatch(SET_TOKEN(response.json.access_token));

            return navigate("/");
        } else {
            console.log(response.json);
            alert(response.json.error);
        }
    };


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

                <button onClick={()=>onValid(account.id,account.password)}>
                    <h3>Login</h3>
                </button>
            </div>
    )
}


export default Login