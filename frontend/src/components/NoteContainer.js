import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const api = "http://localhost:3000/api/v1/notes";

class NoteContainer extends Component {
  state = {
    notes: [],
    showNote: [],
    searchTerm: "",
    render: null
  };

  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(notes =>
        this.setState({
          notes
        })
      )
      .catch(error => alert("Danger, Will Robinson 🤖"));
  }

  showNote = (e, note) => {
    this.setState({
      showNote: note,
      render: "show"
    });
  };

  editNote = (e, note) => {
    this.setState({
      showNote: note,
      render: "edit"
    });
  };

  updatedNote = note => {
    fetch(`${api}/${note.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body
      })
    });

    let updatedNotes = [...this.state.notes].map(noteItem => {
      // updates the note in array
      if (noteItem.id === note.id) {
        return note;
      } else {
        return noteItem;
      }
    });

    this.setState({
      notes: updatedNotes,
      showNote: note,
      render: "show"
    });
  };

  newNote = () => {
    this.setState({
      render: "new"
    });
  };

  createNote = note => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body
      })
    });
    this.setState({
      notes: [...this.state.notes, note]
    });
  };

  deleteNote = note => {
    // not re rendering
    fetch(`${api}/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    let updatedNotes = [...this.state.notes].filter(
      noteItem => noteItem.id !== note.id
    );

    this.setState({
      notes: updatedNotes,
      render: ""
    });
  };

  search = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Search search={this.search} />
        <div className="container">
          <Sidebar
            notes={this.state.notes}
            showNote={this.showNote}
            newNote={this.newNote}
            searchTerm={this.state.searchTerm}
          />

          <Content
            notes={this.state.notes}
            showNote={this.state.showNote}
            render={this.state.render}
            cancelEdit={this.showNote}
            editNote={this.editNote}
            updatedNote={this.updatedNote}
            createNote={this.createNote}
            deleteNote={this.deleteNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
