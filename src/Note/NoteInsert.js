import React, { useState } from "react";
import "./NoteInsert.css";
import icon3 from "../img/icon3.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getCookie, removeCookie } from "../util/cookie";
import { useNavigate } from "react-router-dom";
import { noteinsert, TimeSet } from "../modules/userAction";
import { useDispatch } from "react-redux";
import { setLogout } from "../modules/Logincheck";

const NoteInsert = () => {
  const token = getCookie("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, SetTitle] = useState("");
  const [impoColor, SetimporColor] = useState("");
  const [content, SetContent] = useState("");

  let headers = {
    AccessToken: token,
  };

  const onChangeTitle = (e) => {
    SetTitle(e.target.value);
  };

  const onChangeColor = (e) => {
    SetimporColor(e.target.value);
  };

  const onChangeContent = (value) => {
    SetContent(value);
  };

  const onInsertList = () => {
    if (dispatch(TimeSet).payload) {
      removeCookie("username");
      dispatch(setLogout());
      navigate("/Login");
      alert("로그인 세션이 종료되었습니다.");
    } else {
      if (title === "") {
        return alert("제목을 입력해주세요");
      } else if (content === "") {
        return alert("내용을 입력해주세요");
      } else if (impoColor === "") {
        return alert("중요도를 선택해주세요");
      } else {
        let body = {
          title: title,
          content: content,
          importance: impoColor,
        };

        dispatch(noteinsert(headers, body)).then((res) => {
          if (res.payload.id > 0) {
            alert("글이 작성되었습니다.");
            navigate("/Note");
          } else {
            alert("글 작성 실패, 다시 시도해주세요.");
          }
        });
      }
    }
  };

  return (
    <>
      <div className="write_frame">
        <div className="write_icon_marg">
          <img src={icon3} />
        </div>

        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            maxlength="50"
            className="write_input"
            onChange={onChangeTitle}
          />
        </div>

        <div className="import_frame">
          <h4>중요도</h4>

          <div className="importance_color import_margin">
            <input
              type="radio"
              value="#000000"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#F5333E"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FF9D16"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FFD336"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#6FD44A"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#3FA8F5"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#5D6DBE"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FF57DA"
              onClick={onChangeColor}
              name="color"
            />
            <label className="importance_color"></label>
          </div>
        </div>

        <ReactQuill
          className="shadow-sm"
          theme="snow"
          style={{
            // height: '550px',
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          id="content"
          name="content"
          value={content}
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ align: [] }],
              [{ color: [] }, { background: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "video", "code-block"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "color",
            "background",
            "list",
            "bullet",
            "indent",
            "link",
            "video",
            "image",
            "code-block",
            "align",
          ]}
          onChange={onChangeContent}
        />

        <div className="write_btn_wrapper">
          <button className="write_btn" onClick={onInsertList}>
            <h3>글 작성</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteInsert;
