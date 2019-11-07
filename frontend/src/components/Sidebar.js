import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} showNoteDetail={this.props.showNoteDetail} />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
