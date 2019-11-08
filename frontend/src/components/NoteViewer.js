import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  let splitCreated = props.activeNote.created_at.split('T')

  let splitCreatedDate = splitCreated[0].split('-')
  let dateCreated = splitCreatedDate[1] + '-' + splitCreatedDate[2] + '-' + splitCreatedDate[0]

  let splitCreatedTime = splitCreated[1].split(':')
  let timeCreated = splitCreatedTime[0] > 12 
    ? (splitCreatedTime[0] - 12) + ':' + splitCreatedTime[1]  + ' PM'
      : splitCreatedTime[0] + ':' + splitCreatedTime[1] + ' AM'

  let splitUpdated = props.activeNote.updated_at.split('T')

  let splitUpdatedDate = splitUpdated[0].split('-')
  let dateUpdated = splitUpdatedDate[1] + '-' + splitUpdatedDate[2] + '-' + splitUpdatedDate[0]

  let splitUpdatedTime = splitUpdated[1].split(':')
  let timeUpdated = splitUpdatedTime[0] > 12
    ? (splitUpdatedTime[0] - 12) + ':' + splitUpdatedTime[1]  + ' PM'
      : splitUpdatedTime[0] + ':' + splitUpdatedTime[1] + ' AM'

  return (
    <Fragment>
      <div className='button-row'>
        <button className='wide-button'>Created: {dateCreated} at {timeCreated}</button>
        <button className='float-right wide-button'>Updated: {dateUpdated} at {timeUpdated}</button>
      </div>
      <h1>{props.activeNote.title}</h1>
      <p>{props.activeNote.body}</p>
      <button onClick={props.handleEditButton}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
