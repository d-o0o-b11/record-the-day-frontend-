import React from "react";
import NoteItem from "./NoteItem";
import "./NoteItem.css";

const NoteList = ({ notes }) => {
  //check를 누르면 정렬이 되지않은 check한 list가 제일 밑으로 가도록 정렬되어있다.
  //해결 => 프론트에서 axios.get data를 sort한 후 뿌리기로 하였다.
  //내림차순
  // notes.sort(function(a,b){
  //     return b["id"] - a["id"];
  // })

  return (
    <>
      <div className="notelist_frame">
        {notes.map((note) => (
          <NoteItem notes={note} key={note.id} />
        ))}
      </div>
    </>
  );
};

export default NoteList;
