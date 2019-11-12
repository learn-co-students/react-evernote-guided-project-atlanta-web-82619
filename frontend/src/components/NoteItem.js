import React from "react";

const NoteItem = props => (
  <li key={props.note.id} onClick={e => props.showNote(e, props.note)}>
    <h2>{props.note.title.split(".")}</h2>
    <p>{props.note.body.split(".").slice(0, 2)}...</p>
  </li>
);

export default NoteItem;
