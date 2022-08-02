import socketIO from 'socket.io-client';
const socket = socketIO.connect('httpp://localhost:4000');
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>welcome</p>
      </div>
    );
  }
}

export default App;
