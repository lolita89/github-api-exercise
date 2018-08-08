import React, { Component } from 'react';
import './ApiGithub.css';
import axios from 'axios';

class ApiGithub extends Component {
    constructor () {
        super()
        this.state = {
          username: '',
          id: '',
          location: '',
          blog: '',
        }
    
        this.nameClick = this.nameClick.bind(this)
        this.idClick = this.idClick.bind(this)
        this.locationClick = this.locationClick.bind(this)
        this.blogClick = this.blogClick.bind(this)
      }
    
      nameClick () {
        axios.get('https://api.github.com/users/lolita89')
          .then(response => this.setState({username: response.data.name}))
      }
    
      idClick () {
        axios.get('https://api.github.com/users/lolita89')
          .then(response => this.setState({id: response.data.id}))
      }
    
      locationClick () {
        axios.get('https://api.github.com/users/lolita89')
          .then(response => this.setState({location: response.data.location}))
      }
    
      blogClick () {
        axios.get('https://api.github.com/users/lolita89')
          .then(response => this.setState({blog: response.data.blog}))
      }
    
      render() {
        return (
        <div>
          <h1>Hello!!</h1>
          <h4>It is the simple exercise to get the data from GitHub API</h4>
            
            <div className="button_container">
    
              <button className="button button-name" onClick={this.nameClick}>
                Click me to see the owner of the GitHub account
              </button>
    
               <button className="button button-id" onClick={this.idClick}>
                Its ID
              </button>
    
               <button className="button button-location" onClick={this.locationClick}>
                Her Location
              </button>
    
               <button className="button button-blog" onClick={this.blogClick}>
                Her blog
              </button>
    
              <p>This is GitHub of {this.state.username}</p>
              <p>Her id is {this.state.id}</p>
              <p>She lives in {this.state.location}</p>
              <p>Her blog is {this.state.blog}</p>
    
            </div>
    
        </div>
        );
      }
    }
    
    export default ApiGithub;