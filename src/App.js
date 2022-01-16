
import React from 'react';
import './App.css';

import PostFeed from './PostFeed/post-feed-component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      imageFeed: []
    }
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=iqdS8Df0jwyccz14dVTF0JIVV4vkoPWjJWdQwtek&count=10")
    .then(response => response.json())
    .then(response => this.setState({ imageFeed: response}));

  }
  render() {
    return (
      <div className='page'>
        <PostFeed posts = {this.state.imageFeed}/>
      </div>
    )
  }
  
}

export default App;
