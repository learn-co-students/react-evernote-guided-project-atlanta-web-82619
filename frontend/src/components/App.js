import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const URL = 'http://localhost:3000/api/v1/notes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      query: '',
      filteredNotes: []
    }
  }

  componentDidMount() {
    this.dataFetch()
  }

  dataFetch = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({notes: data}))
  }

  handleNewButton = () => {
    fetch(URL, {
      method: 'POST',
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
    .then(data => {
      this.setState({
        notes: [...this.state.notes, data]
      })
    })
    window.location.reload()
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
    this.search(this.state.notes, e.target.value)
  }

  search = (notes, query) => {
    this.setState({
      filteredNotes: notes.filter(note => 
        note.title.toLowerCase()
          .indexOf(query.toLowerCase()) !== -1
        )
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer 
          notes={
            this.state.filteredNotes.length === 0  
              && this.state.query === '' 
                ? this.state.notes 
                  : this.state.filteredNotes} 
          handleSearch={this.handleSearch} 
          handleNewButton={this.handleNewButton}
          dataFetch={this.dataFetch}
        />
      </div>
    );
  }
}

export default App;
