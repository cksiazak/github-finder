import React, { Component } from 'react';
import NavBar from './Components/layout/NavBar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  //Search Github Users from prop passed from Search.js
  searchUsers = async text => {
    this.setState({
      loading: true
    });
    const dataset = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      users: dataset.data.items,
      loading: false
    });
  };

  //Clear users from state, passed from Search.js
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
