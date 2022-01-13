
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

  // componentDidMount() {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=iqdS8Df0jwyccz14dVTF0JIVV4vkoPWjJWdQwtek")
  //   .then(response => response.json())
  //   .then(posts => this.setState({ imageFeed: posts}));

  // }
  render() {
    return (
      <PostFeed posts = {this.state.imageFeed}/>
    )
  }
  
}

export default App;
