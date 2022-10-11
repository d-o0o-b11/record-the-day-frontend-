import React, { useState, useEffect } from "react";
import "./NoteDetail.css";
import { getCookie } from "../util/cookie";
import { useParams, Link, useNavigate } from "react-router-dom";
import { notedetail, notedelete } from "../modules/userAction";
import { useDispatch } from "react-redux";

const PrintList = (headers, id, dispatch) => {
  const [data, setData] = useState([]);

  const ListUrl = () => {
    dispatch(notedetail(id, headers)).then((res) => {
      setData(res.payload);
    });
  };
  useEffect(() => {
    //한번만 실행
    ListUrl();
  }, []);

  return data;
};

const NoteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = getCookie("token");
  const navigate = useNavigate();

  let headers = {
    AccessToken: token,
  };

  const data = PrintList(headers, id, dispatch);

  const onRemove = () => {
    let body = {
      id: id,
    };

    dispatch(notedelete(headers, body)).then((res) => {
      if (res.payload > 0) {
        alert("글이 삭제되었습니다.");
        navigate("/Note");
      }
    });
  };

  return (
    <>
      <div className="notedetail_frame">
        <h1>제목: {data.title}</h1>
        <hr />

        <h3 dangerouslySetInnerHTML={{ __html: data.content }}></h3>
      </div>

      <div className="notedetail_frame2">
        <button style={{ cursor: "pointer" }}>
          <Link
            to={`/edit/${id}`}
            style={{ textDecoration: "none", color: "black" }}>
            수정
          </Link>
        </button>
        <button onClick={onRemove} style={{ cursor: "pointer" }}>
          삭제
        </button>
      </div>
    </>
  );
};

export default NoteDetail;
