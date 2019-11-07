import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      selectedNote: 0
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
    console.log(id);
    this.setState({ selectedNote: this.state.notes.find(note => note.id === id) })
  }

  render() {



    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} showNoteDetail={this.showNoteDetail} />
          <Content selectedNote={this.state.selectedNote}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
