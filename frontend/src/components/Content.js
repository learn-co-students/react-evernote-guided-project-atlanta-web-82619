import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  renderContent = () => {
    if (this.props.status === 'edit') {
      return <NoteEditor 
              activeNote={this.props.activeNote} 
              handleSubmit={this.props.handleSubmit} 
              handleCancelButton={this.props.handleCancelButton} 
              handleDeleteButton={this.props.handleDeleteButton}
            />;
    } else if (this.props.status === 'view') {
      return <NoteViewer 
              activeNote={this.props.activeNote} 
              handleEditButton={this.props.handleEditButton}/>;
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
