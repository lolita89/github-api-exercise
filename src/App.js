import React, { Component } from 'react';
import './App.css';
import ApiGithub from './components/ApiGithub';

class App extends Component {
  
  render() {
    return (
    <div className="row">
      <div className="column">
      <ApiGithub>  
      </ApiGithub>
      </div>

      <div>
        <h1>It will be another component here....</h1>
      </div>
    </div>
    );
  }
}

export default App;
