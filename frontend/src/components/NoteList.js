import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
  return (
    <ul>
      <NoteItem note={props.note} showNote={props.showNote} />
    </ul>
  );
};

export default NoteList;
