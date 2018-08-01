import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    axios.get('https://api.github.com/users/lolita89')
      .then(response => this.setState({username: response.data.name}))
  }


  render() {
    return (
    <div className="button_container">
      <button className="button" onClick={this.handleClick}>
        Click me please!!
      </button>
      <p>This is gitHub of {this.state.username}</p>
    </div>
    );
  }
}

export default App;
