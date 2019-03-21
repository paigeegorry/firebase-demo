import React, { Component } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import { addNote } from './actions/notes';
import { ConnectedNotes } from './components/Notes';
import { ConnectedNote } from './components/Note';

class App extends Component {

  handleSubmit = (title, body, event) => {
    event.preventDefault();
    addNote({ title, body });
  }

  render() {
    return (
      <>
        <NoteForm 
          handleSubmit={this.handleSubmit} 
        />
        <ConnectedNotes />
      </>
    );
  }
}

export default App;
