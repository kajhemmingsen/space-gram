import React from 'react';
import './like-button-styles.css';

class LikeButton extends React.Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    toggleLike = () => {
        this.setState(prevState => ({ isLiked: !prevState.isLiked}))
    }
    
    render() {
    return (
        <div>
            <button  className='like-button'
            onClick={() => this.toggleLike()}>{ this.state.isLiked ?
            <span className='liked'> &#9829; Liked </span> : <span className='not-liked'>Like</span>}
            </button>
        </div>
    )
    }
}

export default LikeButton;