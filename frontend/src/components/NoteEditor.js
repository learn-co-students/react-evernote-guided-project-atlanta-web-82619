import React, { Component } from "react";

class NoteEditor extends Component {
  state = {
    title: this.props.showNote.title,
    body: this.props.showNote.body,
    id: this.props.showNote.id
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updatedNote(this.state);
  };

  render() {
    return (
      <form className="note-editor" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add title..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <textarea
          name="body"
          placeholder="Add content..."
          value={this.state.body}
          onChange={this.onChange}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button
            type="button"
            onClick={e => this.props.cancelEdit(e, this.props.showNote)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
