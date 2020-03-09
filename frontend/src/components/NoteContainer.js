import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const URL = 'http://localhost:3000/api/v1/notes/'

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
    fetch(URL + this.state.activeNote.id, {
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

    window.location.reload()
  }

  handleCancelButton = () => {
    this.setState({
      status: ''
    })
  }

  handleDeleteButton = () => {
    fetch(URL + this.state.activeNote.id, {
      method: 'DELETE',
      body: JSON.stringify({
        title: 'Title here...',
        body: 'Write something here...',
        user_id: 1
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => alert(data.message))

    this.setState({
      status: '',
      activeNote: []
    })

    window.location.reload()
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
            handleDeleteButton={this.handleDeleteButton}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;