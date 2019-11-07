import React from 'react';

const NoteItem = (props) => (
  <li onClick={() => props.showNoteDetail(props.note.id)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0,20)}...</p>
  </li>
);

export default NoteItem;
