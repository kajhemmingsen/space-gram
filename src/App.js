
import React from 'react';
import './App.css';

import PostFeed from './PostFeed/post-feed-component';
import Header from './Header/header-component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      imageFeed: [],
      errorMessage: null
    }
  }

  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=iqdS8Df0jwyccz14dVTF0JIVV4vkoPWjJWdQwtek&count=10")
    .then(response => response.json())
    .then(response => this.setState({ imageFeed: response}))
    .catch(e => this.setState({ errorMessage: e}));

  }
  render() {
    return (
      <div className='page'>
        <Header/>
        { (this.state.errorMessage || this.state.imageFeed.length === 0) ? <span>Sorry, there was an issue contecting NASA's API</span> :
        <PostFeed posts = {this.state.imageFeed}/> }
      </div>
    )
  }
  
}

export default App;
