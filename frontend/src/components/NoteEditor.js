import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.activeNote.title,
      body: this.props.activeNote.body
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
        <textarea name="body" value={this.state.body} onChange={this.handleChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={this.props.handleCancelButton} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
