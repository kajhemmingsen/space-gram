import React from 'react';
import './post-item-styles.css'


const PostItem = ({ title, date, explanation, imageUrl}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h5>{date}</h5>
            <p>{explanation}</p>
            <img alt='photo' src={imageUrl}/>
        </div>
    );
}

export default PostItem;