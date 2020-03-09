import React, { Component } from "react";

class NoteNew extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createNote(this.state);
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
        </div>
      </form>
    );
  }
}

export default NoteNew;
