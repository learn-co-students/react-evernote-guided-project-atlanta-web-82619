import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const PATCH_NOTES_URL = 'http://localhost:3000/api/v1/notes/'

class NoteContainer extends Component {
  constructor() {
    super()

    this.state = {
      status: '',
      activeNote: []
    }
  }

  handleClick = (note) => {
    if (this.state.activeNote !== note) {
      this.setState({
        status: 'view',
        activeNote: note
      })
    } else {
      this.setState({
        status: '',
        activeNote: []
      })
    }
  }

  handleEditButton = () => {
    this.setState({
      status: 'edit'
    })
  }

  handleSubmit = (e, note) => {
    fetch(PATCH_NOTES_URL + this.state.activeNote.id, {
      method: 'PATCH',
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        status: '',
        activeNote: []
      })
    })
  }

  handleCancelButton = () => {
    this.setState({
      status: ''
    })
  }

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.props.handleSearch}/>
        <div className='container'>
          <Sidebar 
            notes={this.props.notes} 
            handleClick={this.handleClick} 
            handleNewButton={this.props.handleNewButton}
          />
          <Content 
            status={this.state.status} 
            activeNote={this.state.activeNote} 
            handleEditButton={this.handleEditButton} 
            handleSubmit={this.handleSubmit} 
            handleCancelButton={this.handleCancelButton}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
