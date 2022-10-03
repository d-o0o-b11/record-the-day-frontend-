import React from "react";
import NoteItem from "./NoteItem";
import "./NoteItem.css"

const NoteList = ({notes, onRemove}) =>{

    //check를 누르면 정렬이 되지않은 check한 list가 제일 밑으로 가도록 정렬되어있다.
    //해결 => 프론트에서 axios.get data를 sort한 후 뿌리기로 하였다.
    //오름차순
    notes.sort(function(a,b){
        return a["id"]-b["id"];
    })

    return(
        <>
            <div className="notelist_frame">
                {notes.map(note=>(
                    <NoteItem notes={note} key={note.id} onRemove={onRemove}/>
                ))}
            </div>
        </>
    )
}


export default NoteList