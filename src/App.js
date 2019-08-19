import React, { Component } from 'react';
import NavBar from './Components/layout/NavBar';
import Users from './Components/users/Users';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';

    return (
      <div className="App">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <Users />
      </div>
    );
  }
}

export default App;
