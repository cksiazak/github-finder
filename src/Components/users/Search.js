import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." />
          <input
            type="submit"
            value={this.state.text}
            onChange={this.onChange}
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
