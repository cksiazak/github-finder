import React, { Component } from 'react';
import NavBar from './Components/layout/NavBar';
import Users from './Components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    const dataset = await axios.get('https://api.github.com/users');

    this.setState({
      users: dataset.data,
      loading: false
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
