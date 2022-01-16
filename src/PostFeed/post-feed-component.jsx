import React from 'react'
import PostItem from '../PostItem/post-item-component'

import './post-feed-styles.css'

const PostFeed = ({posts}) => {
    const postArray = posts.map((post, i) => {
        return (<PostItem
            key={i}
            imageUrl={posts[i].url}
            title={posts[i].title}
            date={posts[i].date}
            explanation={posts[i].explanation}
            />)
    });

    return (
        <div className='post-feed'>
            {postArray}
        </div>
    );
}

export default PostFeed;