import React, { useState, useEffect } from "react";
import "./NoteDetail.css";
import { getCookie, removeCookie } from "../util/cookie";
import { useParams, Link, useNavigate } from "react-router-dom";
import { notedetail, notedelete, TimeSet } from "../modules/userAction";
import { useDispatch } from "react-redux";
import { setLogout } from "../modules/Logincheck";
import Loading from "../Loading/Loading";

const PrintList = (headers, id, dispatch, navigate) => {
  const [data, setData] = useState([]);

  const ListUrl = () => {
    dispatch(notedetail(id, headers)).then((res) => {
      setData(res.payload);
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

  return data;
};

const NoteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = getCookie("token");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  let headers = {
    AccessToken: token,
  };

  const data = PrintList(headers, id, dispatch, navigate);

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
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default NoteDetail;
