import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popup from './components/popup';
import Container from './components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Container>
            <Popup>Test1</Popup>
            <Popup>Test2</Popup>
          </Container>
          <Container>
            <Popup>Test3</Popup>
            <Popup>Test4</Popup>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
