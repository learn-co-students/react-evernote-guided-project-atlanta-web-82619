import React, { Fragment } from "react";

const NoteViewer = props => {
  return (
    <Fragment>
      <h2>{props.showNote.title}</h2>
      <p>{props.showNote.body.split("")}</p>
      <button onClick={e => props.editNote(e, props.showNote)}>Edit</button>
      <button onClick={e => props.deleteNote(props.showNote)}>Delete</button>
      <button onClick={props.sendEmail}>Share via Email</button>
    </Fragment>
  );
};

export default NoteViewer;
