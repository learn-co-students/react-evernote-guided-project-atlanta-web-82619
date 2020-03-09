import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.note.title,
      body: this.props.note.body
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea name="body" value={this.state.body} onChange={this.handleChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={() => this.props.saveEdit(this.props.note.id, this.state.title, this.state.body, this.props.note.user.id)} />
          <button type="button" onClick={this.props.handleEdit}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
