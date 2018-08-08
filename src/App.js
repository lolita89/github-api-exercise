import React, { Component } from 'react';
import './App.css';
import ApiGithub from './components/ApiGithub';
import ApiSpotify from './components/ApiSpotify';


class App extends Component {

  render() {
    return (
    <div className="row">
        
        <div className="column">
          <ApiGithub>  
          </ApiGithub>
        </div>

        <div className="column">
          <ApiSpotify> 
          </ApiSpotify>
        </div>
        
    </div>
    );
  }
}

export default App;
