import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const notes = props.notes.map(note => (
    <NoteItem key={note.id} note={note} showNoteDetail={props.showNoteDetail}  />
  ))
  return (
    <ul>
      { notes }
    </ul>
  );
}

export default NoteList;
