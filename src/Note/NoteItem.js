import React from "react";
import { Link } from "react-router-dom";

import "./Note.css";
import "./NoteItem.css";

const NoteItem = ({ notes }) => {
  const { id, title, importance, modifiedDate } = notes;
  let date =
    ("" + modifiedDate).substr(0, 4) +
    "/" +
    ("" + modifiedDate).substr(5, 2) +
    "/" +
    ("" + modifiedDate).substr(8, 2);
  return (
    <Link
      to={`/detail/${id}`}
      style={{ textDecoration: "none", color: "black" }}>
      <div className="note_list" style={{ borderColor: importance }}>
        <h5>{date}</h5>
        <h3
          className="content_text"
          dangerouslySetInnerHTML={{ __html: title }}></h3>
      </div>
    </Link>
  );
};
export default NoteItem;
