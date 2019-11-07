import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.activeNote.title}</h2>
      <p>{props.activeNote.body}</p>
      <button onClick={props.handleEditButton}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
