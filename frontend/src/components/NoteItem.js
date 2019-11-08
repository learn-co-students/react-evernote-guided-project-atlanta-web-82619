import React from 'react';

const NoteItem = (props) => (
  <div onClick={() => {props.handleClick(props.note)}} >
    <li>
      <h2>{props.note.title}</h2>
      <p>
        {props.note.body.length <= 20 ?
        props.note.body :
        `${props.note.body.substring(0,20)}..`}
      </p>
    </li>
  </div>
);

export default NoteItem;
