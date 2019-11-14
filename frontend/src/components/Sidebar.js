import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    return (
      <div className="master-detail-element sidebar">
        {this.props.notes
          .filter(note =>
            note.title
              .toLowerCase()
              .includes(this.props.searchTerm.toLowerCase())
          )
          .map(note => (
            <NoteList
              note={note}
              key={note.id}
              showNote={this.props.showNote}
            />
          ))}
        {this.props.notes
          .filter(note =>
            note.body
              .toLowerCase()
              .includes(this.props.searchTerm.toLowerCase())
          )
          .map(note => (
            <NoteList
              note={note}
              key={note.id}
              showNote={this.props.showNote}
            />
          ))}
        <button onClick={this.props.newNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
