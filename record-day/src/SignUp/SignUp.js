import React, {useState} from "react";
import "./SignUp.css"
import icon6 from "../img/icon6.png"

const SignUp = () =>{

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

      console.log(account)


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

                <button>
                    <h3>SignUp</h3>
                </button>
            </div>
    )
}


export default SignUp