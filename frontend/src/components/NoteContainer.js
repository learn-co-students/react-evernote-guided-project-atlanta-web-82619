import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const USER_API = 'http://localhost:3000/api/v1/notes';

class NoteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      selectedNote: null,
      editingNote: null,
      titleFilter: '',
      bodyFilter: ''
    }
  }

  fetchNotes = () => {
    fetch(USER_API)
      .then(r => r.json())
      .then(notes => {
        this.setState({
          notes: notes
        });
      })
  }

  componentDidMount() {
    this.fetchNotes();
  }

  filterNotesByTitle = (filter) => {
    this.setState({
      titleFilter: filter
    })
  }

  filterNotesByBody = (filter) => {
    this.setState({
      bodyFilter: filter
    })
  }

  createNote = () => {
    fetch(USER_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'default',
        body: 'placeholder',
        user_id: 1
      })
    })
      .then(r => r.json())
      .then(j => {this.fetchNotes()})
  }

  selectNote = (note) => {
    this.setState({
      selectedNote: note,
      editingNote: null
    })
  }

  startEdit = (note) => {
    this.setState({
      editingNote: note
    })
  }

  stopEdit = () => {
    this.setState({
      editingNote: null,
    })
  }

  editNote = (note, title, body, user_id) => {
    fetch(`${USER_API}/${note.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        user_id: user_id
      })
    })
      .then(r => r.json())
      .then(j => {this.fetchNotes()})
  }

  render() {
    return (
      <Fragment>
        <Search filterNotes={this.filterNotesByTitle} searchKey='title' />
        <Search filterNotes={this.filterNotesByBody} searchKey='body' />
        <div className='container'>
          <Sidebar 
            notes={this.state.notes.filter(note => {
              return (
                note.title.includes(this.state.titleFilter) &&
                note.body.includes(this.state.bodyFilter)
              )
            })} 
            selectNote={this.selectNote} 
            createNote={this.createNote}
          />
          <Content 
            note={this.state.selectedNote} 
            editingNote={this.state.editingNote} 
            startEdit={this.startEdit}
            stopEdit={this.stopEdit}
            editNote={this.editNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
