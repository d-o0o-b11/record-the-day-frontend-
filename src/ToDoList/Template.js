import React, { useState, useEffect } from "react";
import "./Template.css";
import icon8 from "../img/icon8.png";
import ToDoList from "./ToDoList";
import ToDoInsert from "./ToDoInsert";
import { getCookie, removeCookie } from "../util/cookie";
import Pagination from "../Pagination";
import {
  todolist,
  todolistPage,
  todoinsert,
  todocheck,
  todoremove,
  TimeSet,
} from "../modules/userAction";
import { setLogout } from "../modules/Logincheck";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrintList = (page, count, count_p, headers, dispatch, navigate) => {
  const [data, setData] = useState([]);
  const [pagecount, setPageCount] = useState(0);

  const ListUrl = () => {
    dispatch(todolist(page, headers)).then((res) => {
      setData(res.payload);
    });

    dispatch(todolistPage(headers)).then((res) => {
      setPageCount(res.payload);
    });

    if (dispatch(TimeSet).payload) {
      removeCookie("username");
      dispatch(setLogout());
      navigate("/Login");
      alert("로그인 세션이 종료되었습니다.");
    }
  };

  useEffect(() => {
    //한번만 실행
    ListUrl();
  }, []);

  useEffect(() => {
    //count 변할 때 마다 실행
    ListUrl();
  }, [count]);

  useEffect(() => {
    //page 변할 때 마다 실행
    ListUrl();
  }, [count_p]);

  return [data, pagecount];
};

const Template = () => {
  const token = getCookie("token");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [count_p, setCount_p] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let headers = {
    AccessToken: token,
  };

  const data = PrintList(page, count, count_p, headers, dispatch, navigate);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [insertToggle, setInertToggle] = useState(false);

  const onInsertToggle = () => {
    setInertToggle((prev) => !prev);
    // prev = 이전값
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요");
    } else {
      let body = {
        content: text,
      };
      //로딩화면 체크
      setLoading(true);
      dispatch(todoinsert(headers, body)).then((res) => {
        setCount(count + 1);
        setLoading(false);
      });
    }
  };

  const onCheckToggle = (id) => {
    let body = {
      id: id,
    };
    setLoading(true);
    dispatch(todocheck(headers, body)).then((res) => {
      setCount(count + 1);
      setLoading(false);
    });
  };

  const onRemove = (id) => {
    let body = {
      id: id,
    };
    setLoading(true);
    dispatch(todoremove(headers, body)).then((res) => {
      setCount(count + 1);
      setLoading(false);
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="todolist_frame">
          <div className="todolist_icon_marg">
            <img src={icon8} />
          </div>

          <h1>To Do List </h1>

          {insertToggle && (
            <ToDoInsert
              onInsertToggle={onInsertToggle}
              onInsertTodo={onInsertTodo}
            />
          )}

          <button onClick={onInsertToggle} className="main_listbtn">
            <h3>일정 추가</h3>
          </button>

          <h3>오늘의 할 일 - {data[1]}</h3>
          <ToDoList
            todos={data[0]}
            onCheckToggle={onCheckToggle}
            onRemove={onRemove}
          />

          <Pagination
            total={data[1]}
            limit="9"
            page={page}
            setPage={setPage}
            setcount_p={setCount_p}
          />
        </div>
      )}
    </>
  );
};

export default Template;
