import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      selectedNote: 0,
      editMode: false,
      filteredNotes: [],
      searchQuery: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(notes => this.setState({
      notes
    }))
  }

  showNoteDetail = (id) => {
    this.setState({
      selectedNote: this.state.notes.find(note => note.id === id),
      editMode: false
    })
  }

  saveEdit = (noteId, noteTitle, noteBody, noteUserId) => {
    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify({
        title: noteTitle,
        body: noteBody,
        user_id: noteUserId
      })
    })
  }

  handleEdit = () => {
    this.setState(state => ({
      editMode: !state.editMode
    }))
  }

  createNote = () => {
    fetch(`http://localhost:3000/api/v1/notes`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        title: "default",
        body: "placeholder",
        user_id: 1
      })
    })
    .then(resp => resp.json())
    .then(newNote => {
      this.setState({
        notes: [...this.state.notes, newNote]
      })
    })
  }

  filterNotes = () => {
    this.setState({
      filteredNotes: [...this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))]
    })
  }

  getQuery = (e) => {
    this.setState({ searchQuery: e.target.value}, ()=> this.filterNotes())

  }

  render() {
    const whichNotes = this.state.searchQuery ? this.state.filteredNotes : this.state.notes;
    return (
      <Fragment>
        <Search getQuery={this.getQuery} />
        <div className='container'>
          <Sidebar
          notes={whichNotes}
          showNoteDetail={this.showNoteDetail}
          createNote={this.createNote} />
          <Content
          selectedNote={this.state.selectedNote}
          saveEdit={this.saveEdit}
          editMode={this.state.editMode} handleEdit={this.handleEdit}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
