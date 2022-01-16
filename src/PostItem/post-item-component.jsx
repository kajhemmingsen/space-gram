import React from 'react';
import LikeButton from '../LikeButton/like-button-component';
import './post-item-styles.css'


const PostItem = ({ title, date, explanation, imageUrl}) => {
    return (
        <div className='post-item'>
            <h1 className='post-title'>{title}</h1>
            <h5 className='date-posted'>{date}</h5>
            <div className='post-content'>
                <img className='photo' alt='referenced-pic' src={imageUrl}/>
                <p className='caption'>{explanation}</p>
                <LikeButton/>
            </div>
        </div>
    );
}

export default PostItem;