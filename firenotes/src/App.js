import React, { Component } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import { addNote } from './actions/notes';
import { ConnectedNotes } from './components/Notes';
import { subscribe } from './services/firebase';
import Header from './components/Header';

class App extends Component {

  handleSubmit = (title, body, event) => {
    event.preventDefault();
    addNote({ title, body });
  }

  componentDidMount() {
    subscribe(user => {
      console.log(user);
    })
  }

  render() {
    return (
      <>
        <Header />
        <NoteForm 
          handleSubmit={this.handleSubmit} 
        />
        <ConnectedNotes />
      </>
    );
  }
}

export default App;
