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
  constructor(props) {
    super(props);
    this.setState = {
      editMode: false
    }
  }
  /* create onclick event to toggle editMode, then show NoteEditor with note passed in*/
  renderContent = () => {
    if (this.state.editMode) {
      return <NoteEditor />;
    } else if (this.props.selectedNote) {
      return <NoteViewer note={this.props.selectedNote} />;
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
