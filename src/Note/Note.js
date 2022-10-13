import React, { useState, useEffect } from "react";
import "./Note.css";
import icon7 from "../img/icon7.png";
import NoteList from "./NoteList";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../util/cookie";
import Pagination from "../Pagination";
import {
  notelist,
  notedelete,
  notelistPage,
  TimeSet,
} from "../modules/userAction";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../modules/Logincheck";

const PrintList = (page, count, count_p, headers, dispatch, navigate) => {
  const [data, setData] = useState([]);
  const [pagecount, setPageCount] = useState(0);

  const ListUrl = () => {
    dispatch(notelist(page, headers)).then((res) => {
      setData(res.payload);
    });

    dispatch(notelistPage(headers)).then((res) => {
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

const Note = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const Write = () => {
    if (dispatch(TimeSet).payload) {
      removeCookie("username");
      dispatch(setLogout());
      navigate("/Login");
      alert("로그인 세션이 종료되었습니다.");
    } else {
      navigate("/InsertWrite");
    }
  };
  const token = getCookie("token");

  let headers = {
    AccessToken: token,
  };

  const [count, setCount] = useState(0);
  const [count_p, setCount_p] = useState(0);
  const data = PrintList(page, count, count_p, headers, dispatch, navigate);

  return (
    <>
      <div className="note_frame">
        <div className="note_icon_marg">
          <img src={icon7} />
        </div>

        <h1>Note</h1>

        <button onClick={Write} className="note_listbtn">
          <h3>메모 추가</h3>
        </button>

        <NoteList notes={data[0]} />

        <Pagination
          total={data[1]}
          limit="9"
          page={page}
          setPage={setPage}
          setcount_p={setCount_p}
        />
      </div>
    </>
  );
};

export default Note;
