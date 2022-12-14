import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../util/cookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { noteedit, noteedit2, TimeSet } from "../modules/userAction";
import { useDispatch } from "react-redux";
import { setLogout } from "../modules/Logincheck";

const EditBoard = () => {
  const navigate = useNavigate();
  // URI 파라미터 가져오기
  const { id } = useParams();
  const token = getCookie("token");
  const dispatch = useDispatch();

  const [title, SetTitle] = useState("");
  const [impoColor, SetimporColor] = useState("");
  const [content, SetContent] = useState("");

  let headers = {
    AccessToken: token,
  };

  useEffect(() => {
    if (dispatch(TimeSet).payload) {
      removeCookie("username");
      dispatch(setLogout());
      navigate("/Login");
      alert("로그인 세션이 종료되었습니다.");
    } else {
      dispatch(noteedit(id, headers)).then((res) => {
        SetTitle(res.payload.title);
        SetContent(res.payload.content);
        SetimporColor(res.payload.importance);
      });
    }
  }, []);

  const onChangeTitle = (e) => {
    SetTitle(e.target.value);
  };

  const onChangeContent = (value) => {
    SetContent(value);
  };

  const onChangeColor = (e) => {
    SetimporColor(e.target.value);
  };

  const onInsertList = () => {
    if (title === "") {
      return alert("제목을 입력해주세요");
    } else if (content === "") {
      return alert("내용을 입력해주세요");
    } else if (impoColor === "") {
      return alert("중요도를 선택해주세요");
    } else {
      let body = {
        id: id,
        title: title,
        content: content,
        importance: impoColor,
      };

      dispatch(noteedit2(headers, body)).then((res) => {
        if (res.payload > 0) {
          alert("글이 변경되었습니다.");
          navigate("/Note");
        }
      });
    }
  };

  return (
    <>
      <div className="write_frame">
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            maxlength="50"
            className="write_input"
            defaultValue={title}
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
              checked={impoColor === "#000000"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#F5333E"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#F5333E"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FF9D16"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#FF9D16"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FFD336"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#FFD336"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#6FD44A"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#6FD44A"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#3FA8F5"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#3FA8F5"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#5D6DBE"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#5D6DBE"}
            />
            <label className="importance_color"></label>

            <input
              type="radio"
              value="#FF57DA"
              onClick={onChangeColor}
              name="color"
              checked={impoColor === "#FF57DA"}
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

export default EditBoard;
