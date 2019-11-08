import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.editNote(
      this.props.note, 
      this.state.title,
      this.state.body,
      '1'
    );
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit} >
        <input 
          type="text"
          name="title" 
          placeholder="Enter title:"
          value={this.state.title} 
          onChange={(e) => {this.handleChange(e)}} 
        />
        <textarea 
          name="body" 
          placeholder="Enter body:"
          value={this.state.body} 
          onChange={(e) => {this.handleChange(e)}}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.stopEdit}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
