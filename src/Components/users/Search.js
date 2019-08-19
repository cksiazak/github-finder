import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
      searchUsers: PropTypes.func.isRequired,
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.searchUsers(this.state.text);
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;
