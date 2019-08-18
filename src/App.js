import React, { Component } from 'react';
import NavBar from './Components/layout/NavBar';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';

    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
