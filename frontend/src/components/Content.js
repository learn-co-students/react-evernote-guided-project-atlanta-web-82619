import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import NoteNew from "./NoteNew";

class Content extends Component {
  renderContent = () => {
    if (this.props.render === "show") {
      return (
        <NoteViewer
          showNote={this.props.showNote}
          editNote={this.props.editNote}
          deleteNote={this.props.deleteNote}
          sendEmail={this.props.sendEmail}
        />
      );
    } else if (this.props.render === "edit") {
      return (
        <NoteEditor
          showNote={this.props.showNote}
          cancelEdit={this.props.cancelEdit}
          updatedNote={this.props.updatedNote}
        />
      );
    } else if (this.props.render === "new") {
      return <NoteNew createNote={this.props.createNote} />;
    } else {
      return <Instructions />;
    }
  };

  render() {
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
