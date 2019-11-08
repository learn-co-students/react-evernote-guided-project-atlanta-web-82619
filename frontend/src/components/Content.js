import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  /* create onclick event to toggle editMode, then show NoteEditor with note passed in*/
  renderContent = () => {
    if (this.props.editMode) {
      return <NoteEditor
      note={this.props.selectedNote}
      handleEdit={this.props.handleEdit}
      saveEdit={this.props.saveEdit} />;
    } else if (this.props.selectedNote) {
      return <NoteViewer
      note={this.props.selectedNote}
      handleEdit={this.props.handleEdit}
      saveEdit={this.props.saveEdit} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
