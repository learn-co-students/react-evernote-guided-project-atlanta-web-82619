import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => {
        return (<NoteItem note={note} key={note.id} handleClick={props.selectNote} />)
      })}
    </ul>
  );
}

export default NoteList;
